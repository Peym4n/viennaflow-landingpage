import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.tsx';
// import { translations } from './translations'; // No longer needed directly
// import { Language } from './types'; // Language type will come from context or useLanguage hook
import { Link } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';


// import Slider from 'react-slick';

const ViennaFlowPage: React.FC = () => {
  const { lang, setLang, t } = useLanguage(); // Use global language context
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [lang, setLang] = useState<Language>((localStorage.getItem('selectedLang') as Language) || 'en'); // Local state removed
  // const t = translations[lang]; // t comes from context

  // Change header on scroll (logo & style)
  const [headerScrolled, setHeaderScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 100) {
        header?.classList.add('header-scrolled');
        setHeaderScrolled(true);
      } else {
        header?.classList.remove('header-scrolled');
        setHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  // Language Switch Handler
  const handleLangSwitch = (newLang: typeof lang) => { // typeof lang ensures we use the Language type from context
    setLang(newLang); // setLang from context handles localStorage
    // localStorage.setItem('selectedLang', lang); // Handled by LanguageProvider
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className="header fixed-top">
        <div className="container position-relative">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <div className="logo d-flex align-items-center">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  id="headerImg"
                  className="img-fluid header__logo"
                  src="/web-app-manifest-192x192.png"
                  alt="ViennaFlow logo"
                  style={{ width: 40, height: 40 }}
                />
                <span className={`logo-text ms-2${headerScrolled ? ' logo-text--scrolled' : ''}`}>ViennaFlow</span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="d-flex align-items-center">
              <nav className="navbar navbar-expand-lg d-none d-lg-inline-flex main-nav mr-2">
                <ul className="navbar-nav">
                  <li className="nav-item px-2">
                    {/*<a className="nav-link" href="#contact">Contact</a>*/}
                    <Link className="nav-link" to="/about">{t.nav?.about ?? 'About'}</Link>
                  </li>
                </ul>
                <div>
                  <button 
                    className="btn text-white ml-md-4 px-3 font-weight-bold rounded-pill" 
                    style={{backgroundColor:'#333333'}} 
                    onClick={() => handleLangSwitch(lang === 'en' ? 'de' : 'en')}
                  >
                    {lang === 'en' ? 'DE' : 'EN'}
                  </button>
                </div>
              </nav>
              
              {/* Hamburger Button for Mobile */}
              <div className="d-lg-none">
                <HamburgerMenu isOpen={mobileNavOpen} onClick={() => setMobileNavOpen(o => !o)} />
              </div>
            </div>
          </div>

          {/* Mobile Nav Overlay */}
          <div className={mobileNavOpen ? 'mobile-nav-active' : ''}>
            <div 
              className="mobile-nav-overly" 
              style={{display: mobileNavOpen ? 'block' : 'none'}} 
              onClick={() => setMobileNavOpen(false)} 
            />
            <nav className="mobile-nav d-lg-none">
                {/* Close (X) button at the top - using span instead of button to avoid btn positioning rules */}
                <div className="d-flex justify-content-end p-2">
                  <span 
                    className="close-btn d-flex align-items-center justify-content-center" 
                    style={{cursor: 'pointer', width: '40px', height: '40px', position: 'static'}} 
                    onClick={() => setMobileNavOpen(false)}
                    role="button"
                    aria-label="Close menu"
                  >
                    <i className="bi bi-x" style={{fontSize: '40px'}}></i>
                  </span>
                </div>
                
                {/* Menu items below X button */}
                <ul className="navbar-nav mt-2 mb-5">
                  <li className="nav-item px-2">
                    {/*<a className="nav-link" href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>*/}
                  </li>
                  <li className="nav-item px-2">
                    <Link className="nav-link" to="/about" onClick={() => setMobileNavOpen(false)}>{t.nav?.about ?? 'About Us'}</Link>
                  </li>
                </ul>
                
                {/* Direct language toggle button - positioned at bottom by mobile-nav .btn CSS rule */}
                <div>
                  <button 
                    className="btn text-white px-3 font-weight-bold rounded-pill" 
                    style={{backgroundColor:'#333333'}} 
                    onClick={() => handleLangSwitch(lang === 'en' ? 'de' : 'en')}
                  >
                    {lang === 'en' ? 'Switch to German' : 'Switch to English'}
                  </button>
                </div>
              </nav>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="banner_section">
        <div className="container text-white">
          <div className="col-12 col-md-10 col-lg-8 col-lg-5 p-0 text-end">
            <h2 className="banner_section__h2 font-weight-bold mb-sm-4">
              {t.heading}
            </h2>
            <p className="col-10 col-md-8 p-0">{t.paragraph}</p>
            <div className="mt-5 mb-4">
              <button type="button" className="btn font-weight-bolder px-5 py-3" style={{backgroundColor: '#333333', color: 'white', border: 'none'}}>
                {t.button}
              </button>
              <button type="button" className="btn btn-transparent font-weight-bold text-white d-inline-flex pl-0 pl-md-2 ml-md-2" onClick={() => window.open('https://app.viennaflow.at/', '_blank')}>
                Experience ViennaFlow
                <svg className="flaticon-next ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 31.49 31.49" xmlSpace="preserve">
                  <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLDkcOrw67DqV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxNjAwIDMzOC45IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUvPjxwYXRoIGQ9Ik0xNTk5LjkgMjQ1LjFjLTUxLjkgMTMuMi0xMDAuNyAzNC0xNDcuOSA1OS0yMSAxMS4xLTQyLjEgMjIuMS02NS40IDI3LjgtMzIuMSA3LjktNjMuOCA2LjYtOTUuMS0zLjgtMTguNS02LjItMzUuMy0xNS44LTUxLjgtMjYuMS0xNS05LjQtMzAuMS0xOC43LTQ1LjMtMjcuNy0yMi4zLTEzLjItNDYuNy0xOS44LTcyLjMtMjIuMS0yMS42LTItNDMuMi0yLjgtNjQuOS0xLTIwLjMgMS43LTQwLjUgNC40LTYwLjcgNy4xLTM5LjIgNS4yLTc4LjMgMTEuMS0xMTcuOCAxMi0yNC43LjYtNDkuMi0xLTczLjEtNy44LTI5LTguMi01MC42LTI2LjUtNjguMS01MC41LTEyLjItMTYuNy0yMy4zLTM0LjMtMzYuMS01MC41LTIwLjQtMjUuNy00NS42LTQ0LjgtNzUuOS01Ny4zLTI4LjItMTEuNi01Ny41LTE3LTg3LjgtMTguNS0zMi43LTEuNi02NS4yIDEuMi05Ny44IDMuMi0yMyAxLjUtNDYgMy02OS4xIDQuNC0yNC43IDEuNi00OS41IDIuMS03NC4yIDIuNi0yNy4zLjYtNTMuMS01LjgtNzguMy0xNS40LTM2LjctMTMuOS03Mi0zMS4zLTEwOC40LTQ1LjlDNzQuNiAyMC40IDM4LjcgOC43IDEuOC4xIDEuMi0uMS42IDAgLjEgMGMwIDE0NCAwIDE5MS0uMSAzMzUgMCAzIC40IDQgMy44IDQgNTMwLjgtLjEgMTA2MS42LS4xIDE1OTIuNCAwIDMuMyAwIDMuOC0uOCAzLjgtMy45LS4xLTYyLjQtLjEtMjcuNy0uMS05MHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" alt="banner background" />
      </section>

      {/* Feature Section */}
      <section id="feature" className="features mt-5">
        <div className="container">
          <div className="row">
            <div className="features__block text-slate col-12 col-lg-5 mr-lg-5">
              <p className="mb-4 heading-big">{t.feature.block.text1}</p>
              <div className="features__intro">
                <h2 className="text-slate-dark heading-bigger mb-4">{t.feature.block.text2}</h2>
              </div>
              <p className="mb-sm-4 mb-md-5">{t.feature.block.text3}</p>
            </div>
            <div className="features__description col-12 col-lg-6 mt-5 mt-lg-0 ml-lg-5">
              <div className="row justify-content-start">
                {t.feature.descriptions.map((desc, idx) => (
                  <div className="col-12 p-3 p-lg-3 col-lg-6 pr-lg-5" key={idx}>
                    {desc.img && <img src={desc.img} alt={desc.heading} />}
                    <h4 className="text-slate-dark heading-big fw-500">{desc.heading}</h4>
                    <p>{desc.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Slider Section */}
      {/* Feature Slider Section (if present in HTML, else remove or update class) */}
      <section className="featureSlider mt-5">
        <div className="container">
          <div className="row text-center">
            <p className="col-12 mb-4 heading-big">{t.featureSlider.text1}</p>
            <h2 className="col-12 text-slate-dark heading-bigger mb-4">{t.featureSlider.text2}</h2>
            <p className="col-12 mb-sm-4 mb-md-5">{t.featureSlider.text3}</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter">
        <div className="container">
            <div className="container contact-wrapper text-slate">
                <div className="row text-center mb-4 pt-5">
                    <h4 className="col-12 text-slate-dark heading-bigger mb-4">{t.newsletter.heading}</h4>
                    <p className="col-12 mb-sm-4 mb-md-4">{t.newsletter.subheading}</p>
                </div>
                <div className="row justify-content-center">
                    <form action="" className="col-12 col-lg-7">
                        <div className="contact-container__email-bg">
                            <input type="email" className="contact-container__email-input col-sm-12 col-lg-8 py-2 py-lg-4"
                                placeholder={t.newsletter.placeholder} />
                        </div>
                        <input type="submit" className="contact-container__submit col-12 col-lg-3 my-3 my-lg-0 py-lg-4"
                            value={t.newsletter.button} />
                    </form>
                </div>
                <div className="row text-center mt-lg-4 pb-5">
                    <p className="col-12 mb-sm-4 mb-md-4">{t.newsletter.communityText}</p>
                </div>
            </div>
        </div>
    </section>

      {/* Footer Section with SVG */}
      <section className="footerSection">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAyLjkgMzM3Ij48cGF0aCBkPSJNMTYwMi45IDkzYy01Mi0xMy4yLTEwMC45LTMzLjgtMTQ4LjItNTguNy0yMS0xMS4xLTQyLjEtMjItNjUuNS0yNy43LTMyLjItNy44LTY0LTYuNi05NS4zIDMuOC0xOC41IDYuMi0zNS40IDE1LjctNTEuOSAyNS45LTE1IDkuMy0zMC4xIDE4LjYtNDUuNCAyNy42LTIyLjMgMTMuMi00Ni43IDE5LjctNzIuNCAyMi0yMS43IDItNDMuMyAyLjgtNjUgMS0yMC40LTEuNy00MC42LTQuNC02MC45LTctMzkuMi01LjItNzguNC0xMS0xMTguMS0xMi0yNC43LS42LTQ5LjMgMS03My4yIDcuOC0yOS4xIDguMi01MC43IDI2LjQtNjguMiA1MC4zLTEyLjIgMTYuNy0yMy4zIDM0LjEtMzYuMiA1MC4zLTIwLjQgMjUuNi00NS43IDQ0LjYtNzYuMSA1Ny0yOC4yIDExLjYtNTcuNiAxNi45LTg3LjkgMTguNC0zMi44IDEuNi02NS40LTEuMi05OC0zLjItMjMuMS0xLjUtNDYuMS0zLTY5LjItNC40LTI0LjgtMS42LTQ5LjYtMi4xLTc0LjQtMi42LTI3LjQtLjYtNTMuMiA1LjgtNzguNSAxNS4zLTM2LjggMTMuOC03Mi4xIDMxLjItMTA4LjYgNDUuNy0zNS4zIDE0LjEtNzEuMyAyNS43LTEwOC4yIDM0LjMtLjUuMi0xLjEuMi0xLjcuMkMwIDE5My42IDAgMTQ3LjMtLjEgNGMwLTMgLjQtNCAzLjgtNCA1MzEuOC4xIDEwNjMuNi4xIDE1OTUuNCAwIDMuMyAwIDMuOC44IDMuOCAzLjktLjEgNjIuMSAwIDI3LjEgMCA4OS4xeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="Footer background" className="footer-extender" />
        <div className="container page-map text-white">
            <div className="container">
                <div className="row justify-content-center gap-4 text-center text-md-left">
                    <div className="footer-column col-12 col-md-4 col-lg-2 text-right">
                    <Link to="/privacypolicy" className="heading-big text-white ">{t.footer?.privacyLink ?? 'Privacy Policy'}</Link>
                        

                    </div>
                    <div className="footer-column col-12 col-md-4 col-lg-2">
                      <Link to="/imprint" className="heading-big text-white">{t.footer?.imprintLink ?? 'Imprint'}</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center mt-4">
                    <p id="footer-copyright" className="text-white" dangerouslySetInnerHTML={{ __html: t.footer.copyright.replace('{year}', new Date().getFullYear().toString()) }}></p>
                </div>                
            </div>
        </div>
      </section>
    </div>
  );
};

export default ViennaFlowPage;
