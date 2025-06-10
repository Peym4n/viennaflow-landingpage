import React from 'react';
import './Impressum.css';
import fhLogo from './assets/images/fhtw_logo_fuer_signatur.png';



const Impressum: React.FC = () => {
  return (
    <section id="impressum" className="d-flex align-items-center justify-content-center">
      <div className="container text-dark py-5">
        {/* Zurück-Button */}
        <div className="mb-4">
          <button
            type="button"
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
        </div>

        <h2 className="mb-4">Imprint</h2>

        <p><strong>Company:</strong> ViennaFlow</p>
        <p><strong>Address:</strong> Höchststädtplatz 1, 1200 Vienna, Austria</p>
        <p><strong>Contact Person:</strong> Peyman Aparviz</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@viennaflow.at">info@viennaflow.at</a>
        </p>

        {/* Hinweis zum Projektursprung */}
        <p className="mt-4 fst-italic">
          This project was developed in the context of a university course at <strong>Fachhochschule Technikum Wien</strong>.
        </p>

        {/* Optional: FH-Logo */}
        <img
          src={fhLogo}
          alt="Fachhochschule Technikum Wien Logo"
          className="fh-logo"
        />
      </div>
    </section>
  );
};

export default Impressum;
