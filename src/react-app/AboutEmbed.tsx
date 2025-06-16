import React from 'react'; // Removed useState, useEffect
// import { translations } from './translations'; // No longer needed directly
// import { Language, Translations } from './types'; // Types will come from context or be inferred
import { useLanguage } from './contexts/LanguageContext';

const teamMembers = [
  { name: 'Peyman Aparviz', universityKey: 'uasTechnikumWien', contributionKey: 'projectLeadFullStack' },
  { name: 'Zeynep Tokel', universityKey: 'uasTechnikumWien', contributionKey: 'databaseDesignTesting' },
  { name: 'Ashour Merza', universityKey: 'uasTechnikumWien', contributionKey: 'backendDevelopment' },
  { name: 'Vivien Therese Basco Villalobos', universityKey: 'kmutnb', contributionKey: 'landingPageLogo' },
  { name: 'Pongpisut Somsagun', universityKey: 'kmutnb', contributionKey: 'landingPageDev' },
  { name: 'Student 6', universityKey: 'kmutnb', contributionKey: 'uiUxDesign' },
];

const AboutEmbed: React.FC = () => {
  const { lang, t } = useLanguage(); // Use global language context

  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="mb-4 text-center">{t.aboutPage?.heading ?? (lang === 'de' ? 'Über Uns' : 'About Us')}</h2>
          <p className="text-center mb-5">
            {t.aboutPage?.intro ?? (lang === 'de' 
              ? 'Lernen Sie das Team hinter ViennaFlow kennen.' 
              : 'Meet the team behind ViennaFlow.')}
          </p>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text mb-1"><small className="text-muted">{t.aboutPage?.universities?.[member.universityKey] ?? member.universityKey}</small></p>
                    <p className="card-text">{t.aboutPage?.contributions?.[member.contributionKey] ?? member.contributionKey}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEmbed;
