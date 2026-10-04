import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import './Navbar.css';

/* -------------------------------------------------------------------------- */
/* Navbar Component                                                           */
/* -------------------------------------------------------------------------- */
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Campus Life', href: '#campus-life' },
  { name: 'Boarding', href: '#boarding' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.querySelector(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`tis-navbar ${isScrolled ? 'tis-navbar-scrolled' : ''}`}>
      <div className="tis-nav-container">
        {/* 1. School Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="tis-logo-link">
          <div className="tis-logo-icon-box">
            <GraduationCap className="tis-icon-cap" size={24} />
          </div>
          <div className="tis-logo-text-group">
            <span className="tis-logo-title">TULAS</span>
            <span className="tis-logo-subtitle">International School</span>
          </div>
        </a>

        {/* 2. Desktop Navigation Links */}
        <nav className="tis-desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="tis-nav-link"
            >
              {link.name}
              <span className="tis-link-underline" />
            </a>
          ))}
        </nav>

        {/* 3. Action Items Group */}
        <div className="tis-actions-group">
          <a
            href="#admissions"
            onClick={(e) => handleNavClick(e, '#admissions')}
            className="tis-cta-btn tis-desktop-cta"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="tis-btn-arrow" size={16} />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="tis-mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay / Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="tis-mobile-menu"
          >
            <div className="tis-mobile-menu-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="tis-mobile-nav-link"
                >
                  {link.name}
                </a>
              ))}

              <div className="tis-mobile-drawer-bottom">
                <a
                  href="#admissions"
                  onClick={(e) => handleNavClick(e, '#admissions')}
                  className="tis-cta-btn tis-mobile-cta"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="tis-btn-arrow" size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;