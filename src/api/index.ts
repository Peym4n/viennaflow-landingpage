import { Hono } from "hono";
import { Env, getZohoAccessToken } from "./utils";

const app = new Hono<{ Bindings: Env }>();

app.post("/api/subscribe", async (c) => {
  try {
    const body = await c.req.json<{ email?: string }>();
    const email = body?.email;

    if (!email) {
      return c.json({ success: false, message: "Email is required." }, 400);
    }

    const token = await getZohoAccessToken(c.env);

    const listKey = c.env.ZOHO_LIST_KEY;
    if (!listKey) {
      console.error("ZOHO_LIST_KEY environment variable is not set.");
      return c.json({ success: false, message: "Server configuration error: Missing Key." }, 500);
    }

    const zohoApiUrl = c.env.ZOHO_CAMPAIGNS_ENDPOINT || "https://campaigns.zoho.eu/api/v1.1/json/listsubscribe";
    const params = new URLSearchParams();
    params.append("listkey", listKey);
    params.append("contactinfo", `{"Contact Email": "${email}"}`);
    params.append("resfmt", "JSON");
    console.log("token:", token);
    const res = await fetch(zohoApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const responseText = await res.text();
    console.log("Zoho API Raw Response:", responseText);

    let zohoData;
    try {
      zohoData = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse Zoho JSON response:", responseText);
      // 502 Bad Gateway is appropriate as we received an invalid response from the upstream server.
      return new Response(JSON.stringify({ success: false, message: "Received an invalid response from the subscription service." }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }

    // Zoho API can return a code of "0" for both success and for contacts that already exist.
    if (zohoData.code === "0") {
      if (zohoData.message && typeof zohoData.message === 'string' && zohoData.message.toLowerCase().includes("exists")) {
        // Contact already exists, which we'll treat as a client-side error (but not a server failure).
        console.log(`Contact already exists for email: ${email}`);
        return c.json({ success: true, message: "This email address is already subscribed!" });
      }
      // Genuine success
      return c.json({ success: true, message: zohoData.message });
    }

    // Handle other Zoho API errors where code is not "0"
    console.error(`Zoho API Error (Code: ${zohoData.code}):`, zohoData.message);
    return c.json({ success: false, message: zohoData.message || "An unknown API error occurred." }, 400);
  } catch (error: any) {
    console.error("Subscription error:", error);
    if (error instanceof SyntaxError) { // Handle cases where request body is not valid JSON
        return c.json({ success: false, message: "Invalid request body. Expected JSON." }, 400);
    }
    return c.json({ success: false, message: error.message || "An unexpected error occurred." }, 500);
  }
});

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// This route should come last to catch all other requests
app.get("/*", async (c) => {
  // The `c.req.raw` is the original Request object.
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
