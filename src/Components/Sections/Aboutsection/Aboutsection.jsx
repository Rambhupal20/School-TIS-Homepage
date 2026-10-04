import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import './Aboutsection.css';

const pillars = [
  {
    icon: <Compass className="about-card-icon" />,
    title: 'The Modern Gurukul',
    description:
      'Blending timeless Vedic values and ethical mentorship with modern international education and smart learning environments.',
  },
  {
    icon: <Users className="about-card-icon" />,
    title: '1:8 Faculty Ratio',
    description:
      'Personalized academic supervision and pastoral care ensuring every student receives tailored focus and encouragement.',
  },
  {
    icon: <ShieldCheck className="about-card-icon" />,
    title: 'Holistic Boarding',
    description:
      'A safe, 22-acre home away from home with round-the-clock safety, structured routines, and nutritious residential dining.',
  },
  {
    icon: <Sparkles className="about-card-icon" />,
    title: 'Global Horizons',
    description:
      'Affiliated with CBSE and global curriculum standards, preparing students for tier-one universities across India and abroad.',
  },
];

const highlights = [
  'Recognized among the Top Residential Schools in Uttarakhand',
  'Expansive 22-acre eco-friendly campus nestled in the foothills of Dehradun',
  'Comprehensive athletics including horse riding, shooting, and swimming',
  'Dedicated career counseling and ivy-league preparatory support',
];

const Aboutsection = () => {
  return (
    <section id="about" className="tis-about-section">
      <div className="tis-about-container">
        <motion.div
          className="tis-about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tis-about-badge">About TIS</span>
          <h2 className="tis-about-title">
            Where Tradition Meets <span className="tis-text-gold">World-Class Excellence</span>
          </h2>
          <p className="tis-about-subtitle">
            Established with a vision to nurture future global leaders, Tulas International School 
            fosters intellectual inquiry, cultural roots, and physical endurance in the scenic valley of Dehradun.
          </p>
        </motion.div>

        <div className="tis-about-grid">
          <motion.div
            className="tis-about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="tis-about-h3">Empowering Minds, Cultivating Character</h3>
            <p className="tis-about-text">
              At TIS, education extends well beyond conventional textbooks. We subscribe to 
              a balanced paradigm where academics, creative arts, leadership training, and sports 
              receive equal emphasis. 
            </p>
            <p className="tis-about-text">
              Our residential campus brings together students from over 30 countries and states, 
              instilling cross-cultural collaboration and independence within an empowering, discipline-led environment.
            </p>

            <ul className="tis-about-checklist">
              {highlights.map((item, index) => (
                <li key={index} className="tis-checklist-item">
                  <CheckCircle2 className="tis-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="tis-about-cta-row">
              <a href="#campus-life" className="tis-secondary-btn">
                Discover Campus Life
              </a>
            </div>
          </motion.div>

          <motion.div
            className="tis-about-visual-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tis-about-image-card">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="Tulas International School Campus"
                className="tis-about-main-img"
              />
              <div className="tis-about-badge-floating">
                <span className="tis-badge-number">22+</span>
                <span className="tis-badge-text">Acres of Scenic Dehradun Campus</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="tis-pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="tis-pillar-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="tis-pillar-icon-box">{pillar.icon}</div>
              <h4 className="tis-pillar-title">{pillar.title}</h4>
              <p className="tis-pillar-desc">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;