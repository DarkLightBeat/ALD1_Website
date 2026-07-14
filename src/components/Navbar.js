import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { id: 'home',    label: 'PADDOCK' },
  { id: 'about',   label: 'ABOUT' },
  { id: 'members', label: 'LINEUP'  },
  { id: 'music',   label: 'MUSIC' },
];

function Navbar({ activeSection, menuOpen, onToggleMenu, onNavClick }) {
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Prevent body scroll when nav menu is open (mobile)
  useEffect(() => {
    document.body.classList.toggle('body-lock', !!menuOpen);
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!menuOpen) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        onToggleMenu();
      }
    }

    function handleKey(e) {
      if (e.key === 'Escape' && menuOpen) {
        onToggleMenu();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen, onToggleMenu]);

  // Focus management: focus first link when opening, return focus to button when closing
  useEffect(() => {
    if (menuOpen) {
      const firstLink = navRef.current?.querySelector('a');
      firstLink?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    onNavClick(id);
    if (menuOpen) onToggleMenu();
  };

  return (
    <nav className="dashboard-nav" ref={navRef} aria-label="Primary navigation">
      <div className="nav-logo" onClick={() => onNavClick('home')}>
        <span className="alpha">ALPHA</span>
        <span className="drive">DRIVE</span>
        <span className="one">1</span>
      </div>

      <button
        ref={buttonRef}
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={onToggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="nav-links" className={`nav-links${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      

      <div className="status-box">
        <div className="pulse-red" />
        <span>SYSTEM: ONLINE</span>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string,
  menuOpen: PropTypes.bool,
  onToggleMenu: PropTypes.func.isRequired,
  onNavClick: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  activeSection: 'home',
  menuOpen: false,
};

export default Navbar;
