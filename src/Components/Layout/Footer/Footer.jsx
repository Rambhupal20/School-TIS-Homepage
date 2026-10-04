import React from 'react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="tis-footer">
      <div className="tis-footer-container">
        <div className="tis-footer-grid">
          
          <div className="tis-footer-col">
            <div className="tis-footer-brand">
              <div className="tis-footer-logo-box">
                <GraduationCap className="tis-footer-logo-icon" />
              </div>
              <div>
                <span className="tis-footer-logo-title">TULAS</span>
                <span className="tis-footer-logo-sub">International School</span>
              </div>
            </div>
            <p className="tis-footer-about">
              Dehradun’s premier co-educational boarding school combining the Modern Gurukul tradition with global standards.
            </p>
          </div>

          <div className="tis-footer-col">
            <h4 className="tis-footer-col-title">Navigation</h4>
            <ul className="tis-footer-links">
              <li><a href="#about">About TIS</a></li>
              <li><a href="#academics">Academic Pathways</a></li>
              <li><a href="#testimonials">Parent Testimonials</a></li>
              <li><a href="#apply">Admissions 2026–2027</a></li>
            </ul>
          </div>

          <div className="tis-footer-col">
            <h4 className="tis-footer-col-title">Campus Contact</h4>
            <div className="tis-footer-contact-item">
              <MapPin size={18} className="tis-footer-c-icon" />
              <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011</span>
            </div>
            <div className="tis-footer-contact-item">
              <Phone size={18} className="tis-footer-c-icon" />
              <span>+91 94111 22233 / +91 94111 44455</span>
            </div>
            <div className="tis-footer-contact-item">
              <Mail size={18} className="tis-footer-c-icon" />
              <span>admissions@tis.edu.in</span>
            </div>
          </div>

        </div>

        <div className="tis-footer-bottom">
          <p>© {new Date().getFullYear()} Tulas International School. All rights reserved.</p>
          <p>CBSE Affiliation Code: 3530424 | School Code: 81648</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;