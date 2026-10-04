import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, MapPin } from 'lucide-react';
import './Herosection.css';

const stats = [
  { value: '100%', label: 'University Placement' },
  { value: '22+ Acres', label: 'Lush Dehradun Campus' },
  { value: '1:8', label: 'Faculty-Student Ratio' },
  { value: 'CBSE & IB', label: 'Global Curriculum Pathways' },
];

const Herosection = () => {
  return (
    <section className="tis-hero">
      <div className="tis-hero-bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"
          alt="Tulas International School Campus"
          className="tis-hero-bg-img"
        />
        <div className="tis-hero-overlay" />
      </div>

      <div className="tis-hero-container">
        <div className="tis-hero-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="tis-hero-badge"
          >
            <MapPin className="tis-hero-badge-icon" />
            <span>Nestled in the Serene Valley of Dehradun</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tis-hero-title"
          >
            Nurturing Global Minds Through the{' '}
            <span className="tis-hero-gold">Modern Gurukul</span> Tradition
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="tis-hero-desc"
          >
            Ranked among India's top co-educational boarding institutions. Combining rigorous 
            international academia with Vedic discipline, Olympic-standard athletics, and pastoral warmth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tis-hero-actions"
          >
            <a href="#apply" className="tis-hero-btn-primary">
              <span>Schedule Campus Visit</span>
              <ArrowUpRight className="tis-hero-btn-arrow" />
            </a>

            <a href="#campus-tour" className="tis-hero-btn-secondary">
              <span className="tis-hero-play-icon-box">
                <Play className="tis-hero-play-icon" />
              </span>
              <span>Watch Campus Film</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="tis-hero-stats-card"
        >
          {stats.map((item, index) => (
            <div key={item.label} className="tis-hero-stat-item">
              <span className="tis-hero-stat-value">{item.value}</span>
              <span className="tis-hero-stat-label">{item.label}</span>
              {index < stats.length - 1 && <span className="tis-hero-stat-divider" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;