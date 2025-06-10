import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section
      id="privacy-policy"
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <div className="container text-dark py-5" style={{ maxWidth: '800px' }}>
        {/* Bootstrap Zurück-Button */}
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
        </div>

        <h2 className="mb-4">Privacy Policy</h2>

        <p><strong>1. General Information</strong></p>
        <p>
          Protecting your personal data is important to us. We process your data exclusively in accordance with legal regulations, including the EU General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG). This policy informs you about the nature, scope, and purpose of personal data processing on this website.
        </p>

        <p><strong>2. Controller</strong></p>
        <p>
          The data controller is:<br />
          <strong>ViennaFlow</strong><br />
          Höchststädtplatz 1, 1200 Vienna, Austria<br />
          Email: <a href="mailto:info@viennaflow.at">info@viennaflow.at</a>
        </p>

        <p><strong>3. Hosting (Vercel)</strong></p>
        <p>
          Our website is hosted via <strong>Vercel</strong> (vercel.com), a service provided by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit our website, technical data such as your IP address, browser type, and time of access may be transmitted to Vercel servers. For more information, please refer to{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Vercel’s Privacy Policy
          </a>.
        </p>

        <p><strong>4. Google Maps</strong></p>
        <p>
          We use <strong>Google Maps</strong> to display geographic locations. This service is provided by Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland. Using Google Maps may involve the transfer of data (e.g., IP address, location) to Google servers. For details, see{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google’s Privacy Policy
          </a>.
        </p>

        <p><strong>5. Use of Location (GPS)</strong></p>
        <p>
          With your permission, we use your device’s geolocation (GPS) to offer location-based services. Your location data is used solely to display relevant content nearby and is not stored or shared. You can deny or revoke this access at any time through your browser or device settings.
        </p>

        <p><strong>6. User Accounts & Personal Data</strong></p>
        <p>
          In the future, we may offer user accounts requiring your name and email address. This data will only be used to provide personalized features such as saving favorites. Your data will not be shared with third parties without your explicit consent.
        </p>

        <p><strong>7. Data Storage & Security</strong></p>
        <p>
          We retain your data only as long as necessary to fulfill the stated purposes or as required by law. We implement appropriate technical and organizational measures to protect your data from unauthorized access or loss.
        </p>

        <p><strong>8. Your Rights</strong></p>
        <p>
          According to the GDPR, you have the right to access, correct, delete, restrict, and transfer your personal data, and to object to certain uses of your data. If you believe that the processing of your data violates data protection laws, you can contact us or file a complaint with the Austrian Data Protection Authority (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>).
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
