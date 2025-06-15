// src/react-app/AnalyticsTracker.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
// Only initialize GA in production and if a Measurement ID is provided
// Vite sets import.meta.env.MODE to 'production' during build
const IS_PRODUCTION = import.meta.env.MODE === 'production';

function AnalyticsTracker() {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (IS_PRODUCTION && GA_MEASUREMENT_ID && !initialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      setInitialized(true);
    //   console.log('Google Analytics initialized for production with ID:', GA_MEASUREMENT_ID);
    } else if (!IS_PRODUCTION) {
      console.log('Google Analytics disabled in development mode.');
    } else if (!GA_MEASUREMENT_ID) {
      console.log('Google Analytics disabled: No Measurement ID provided.');
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized && IS_PRODUCTION) { // Ensure we only send if initialized and in production
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname + location.search + location.hash,
        title: document.title, // Optional: send document title
      });
    //   console.log(`GA Pageview sent (production): ${location.pathname + location.search + location.hash}`);
    }
  }, [initialized, location]);

  return null; // This component does not render anything
}

export default AnalyticsTracker;
