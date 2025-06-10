import React from 'react';

const Impressum: React.FC = () => {
  return (
    <section
      id="impressum"
      className="impressum-section d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', backgroundColor: '#f2f2f2' }}
    >
      <div className="text-center text-dark">
        <h2 className="mb-4">Imprint</h2>
        <p><strong>Company:</strong> ViennaFlow</p>
        <p><strong>Address:</strong> Höchststädtplatz 1, 1200 Vienna, Austria</p>
        <p><strong>Contact Person:</strong> Peyman Aparviz</p>
        <p><strong>Email:</strong> office@viennaflow.at</p>
      </div>
    </section>
  );
};

export default Impressum;
