export interface Env {
  ZOHO_KV: KVNamespace;
  ZOHO_REFRESH_TOKEN: string;
  ZOHO_CLIENT_ID: string;
  ZOHO_CLIENT_SECRET: string;
  ASSETS: Fetcher;
  ZOHO_LIST_KEY?: string; // Optional: Your Zoho Campaigns List Key
  ZOHO_CAMPAIGNS_ENDPOINT?: string; // Optional: Your Zoho Campaigns API endpoint if different from default
}

interface ZohoTokenResponse {
  access_token: string;
  expires_in: number;
}

interface CachedToken {
  token: string;
  expires_at: number;
}

export async function getZohoAccessToken(env: Env): Promise<string> {
  const cached = await env.ZOHO_KV.get<CachedToken>("zoho_access_token", { type: "json" });

  if (cached && cached.expires_at > Date.now()) {
    console.log("token from cache");
    return cached.token;
  }

  // Refresh access token
  const res = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: env.ZOHO_REFRESH_TOKEN,
      client_id: env.ZOHO_CLIENT_ID,
      client_secret: env.ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) throw new Error("Failed to refresh Zoho access token");

  const data = await res.json<ZohoTokenResponse>();

  console.log("token from api");
  // Cache for slightly less than 1 hour
  await env.ZOHO_KV.put("zoho_access_token", JSON.stringify({
    token: data.access_token,
    expires_at: Date.now() + (data.expires_in - 60) * 1000, // refresh 1 min early
  }));

  return data.access_token;
}
