import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, PhoneCall, Calendar, CheckCircle } from 'lucide-react';
import './Cta.css';

const perks = [
  'Rolling Admissions for Grades IV – XII',
  'Day Boarding & Full Residential Options',
  'Scholarships Available for Meritorious Students',
];

const Cta = () => {
  return (
    <section id="apply" className="tis-cta-section">
      <div className="tis-cta-container">
        <motion.div
          className="tis-cta-banner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="tis-cta-glow" />

          <div className="tis-cta-content">
            <div className="tis-cta-pill">
              <span className="tis-cta-pill-dot" />
              <span>Admissions Open for Academic Year 2026–2027</span>
            </div>

            <h2 className="tis-cta-heading">
              Begin Your Child’s Journey at <span className="tis-cta-gold">Tulas International</span>
            </h2>
            <p className="tis-cta-subtext">
              Equip your child with world-class academics, pastoral care, and leadership virtues 
              nestled in Dehradun’s serene foothills. Schedule your campus visit or start your online application today.
            </p>

            <ul className="tis-cta-perks">
              {perks.map((perk, index) => (
                <li key={index} className="tis-cta-perk-item">
                  <CheckCircle className="tis-cta-perk-icon" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <div className="tis-cta-buttons-group">
              <a href="#admissions-form" className="tis-btn-primary">
                <span>Apply for Admission</span>
                <ArrowUpRight className="tis-btn-arrow" />
              </a>

              <a href="#download-prospectus" className="tis-btn-secondary">
                <Download className="tis-btn-icon" />
                <span>Download Prospectus</span>
              </a>
            </div>

            <div className="tis-cta-contact-strip">
              <div className="tis-cta-contact-item">
                <PhoneCall className="tis-contact-icon" />
                <span>Admissions Desk: <strong>+91 94111 22233</strong></span>
              </div>
              <span className="tis-contact-divider">•</span>
              <div className="tis-cta-contact-item">
                <Calendar className="tis-contact-icon" />
                <span>Campus Visits: <strong>Mon – Sat, 9:00 AM – 4:00 PM</strong></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;