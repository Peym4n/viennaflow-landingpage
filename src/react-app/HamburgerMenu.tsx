import React from 'react';
import './assets/style.css';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => (
  <button
    type="button"
    className={`mobile-nav-toggle d-lg-none${isOpen ? ' mobile-nav-toggle--scrolled' : ''}`}
    aria-label="Open mobile menu"
    aria-expanded={isOpen}
    onClick={onClick}
  >
    <span className={isOpen ? 'mobile-nav-toggle--span' : ''} />
    <span className={isOpen ? 'mobile-nav-toggle--span' : ''} />
    <span className={isOpen ? 'mobile-nav-toggle--span' : ''} />
  </button>
);

export default HamburgerMenu;
