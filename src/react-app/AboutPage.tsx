import React from 'react';
import { Link } from 'react-router-dom';
import './assets/style.css'; // Assuming common styles are here
import AboutEmbed from './AboutEmbed'; // Import the embeddable component

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
      <header id="header" className="header fixed-top header-scrolled">
        <div className="container position-relative">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="logo d-flex align-items-center">
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <img
                  id="headerImg"
                  className="img-fluid header__logo"
                  src="/web-app-manifest-192x192.png"
                  alt="ViennaFlow logo"
                  style={{ width: 40, height: 40 }}
                />
                <span className='logo-text ms-2 logo-text--scrolled'>ViennaFlow</span>
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg d-none d-lg-inline-flex main-nav mr-2">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                {/* Add other nav links if they exist on other pages */}
              </ul>
            </nav>
            {/* Mobile nav toggle can be added if needed, or simplified header for embeddable version */}
          </div>
        </div>
      </header>

      <main className="">
        <section className="pb-5">
          {/* The team list is now rendered by AboutEmbed */}
          <AboutEmbed />
        </section>
      </main>
    </div>

    {/* Simplified Footer for About Page - now full width */}
    <footer className="py-4 bg-dark text-white text-center">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} ViennaFlow. All Rights Reserved.</p>
        <p><Link to="/privacypolicy" className="text-white">Privacy Policy</Link> | <Link to="/imprint" className="text-white">Imprint</Link></p>
      </div>
    </footer>
    </>
  );
};

export default AboutPage;
