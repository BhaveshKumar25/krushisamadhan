import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/flow', label: 'How It Works' },
    { to: '/impact', label: 'Impact' },
    { to: '/farmer', label: 'Farmer' },
    { to: '/buyer', label: 'Buyer' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">🌿</div>
        <span>Krishi<span className="glow-text">Samadhan</span></span>
      </Link>

      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/farmer" className="nav-cta">Get Started</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
