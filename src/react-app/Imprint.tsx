import React from 'react';
import './imprint.css';
import { ImprintItem } from './types'; // Removed ImprintPageTranslations
import { useLanguage } from './contexts/LanguageContext';

const Imprint: React.FC = () => {
  const { t } = useLanguage(); // Removed lang from destructuring
  const ip = t.imprintPage;

  if (!ip) {
    return <div>Imprint translations not available for the selected language.</div>; 
  }

  return (
    <section id="imprint" className="d-flex align-items-center justify-content-center">
      <div className="container text-dark py-5">
        {/* Zurück-Button */}
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => window.history.back()}
          >
            {ip?.backButton ?? '← Back'}
          </button>
        </div>

        <h2 className="mb-4">{ip?.heading ?? 'Imprint'}</h2>

        {ip?.items?.map((item: ImprintItem, index: number) => (
          <p key={index}>
            <strong>{item.label}</strong>{' '}
            {item.isHtml ? (
              <span dangerouslySetInnerHTML={{ __html: item.value }}></span>
            ) : (
              item.value
            )}
          </p>
        ))}

        {/* Hinweis zum Projektursprung */}
        {ip?.projectNote && (
          <p className="mt-4 fst-italic" dangerouslySetInnerHTML={{ __html: ip.projectNote }}></p>
        )}
      </div>
    </section>
  );
};

export default Imprint;
