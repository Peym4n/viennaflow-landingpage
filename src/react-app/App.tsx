// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyticsTracker from './AnalyticsTracker'; // Import the Analytics tracker
import { LanguageProvider } from './contexts/LanguageContext';
import Landing from "./Landing";
import Imprint from "./Imprint.tsx";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutPage from './AboutPage';
import AboutEmbed from './AboutEmbed'; // Import the new About page
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AnalyticsTracker /> {/* Add Analytics Tracker here */}
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/about-embed" element={<AboutEmbed />} />
        <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
