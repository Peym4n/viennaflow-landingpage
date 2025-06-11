import React from 'react';
import './imprint.css';

const Imprint: React.FC = () => {
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
            ← Back
          </button>
        </div>

        <h2 className="mb-4">Imprint</h2>

        <p><strong>Media Owner and Publisher:</strong> ViennaFlow</p>
        <p><strong>Contact Person:</strong> Peyman Aparviz</p>
        <p><strong>Address:</strong> Höchstädtplatz 6, 1200 Vienna, Austria</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@viennaflow.at">info@viennaflow.at</a>
        </p>
        <p>
          <strong>Website:</strong>{' '}
          <a href="https://viennaflow.at">viennaflow.at</a>
        </p>

        {/* Hinweis zum Projektursprung */}
        <p className="mt-4 fst-italic">
          This is a non-commercial website created as part of a student project at the <strong>UAS Technikum Wien</strong>, Department of Computer Science.
        </p>

        <p><strong>Content Responsibility (according to § 24 Austrian Media Act):</strong> Peyman Aparviz</p>
      </div>
    </section>
  );
};

export default Imprint;
