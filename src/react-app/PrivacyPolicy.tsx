import React from 'react'; // Removed useState, useEffect
// import { translations } from './translations'; // No longer needed directly
import { PrivacyPageTranslations, PrivacyPageSection } from './types'; // Language type removed
import { useLanguage } from './contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage(); // Use global language context, only t needed directly
  const pp = t.privacyPage as PrivacyPageTranslations | undefined; // Get privacyPage translations

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
            {pp?.backButton ?? '← Back'}
          </button>
        </div>

        <h2 className="mb-4">{pp?.heading ?? 'Privacy Policy'}</h2>

        {pp?.sections?.map((section: PrivacyPageSection, index: number) => (
          <div key={index} className="mb-3">
            {section.title && <p><strong dangerouslySetInnerHTML={{ __html: section.title }}></strong></p>}
            <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PrivacyPolicy;
