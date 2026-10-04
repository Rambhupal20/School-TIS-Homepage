import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Globe, GraduationCap } from 'lucide-react';
import './Badges.css';

export const Badge = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className = '',
}) => {
  return (
    <span className={`tis-badge tis-badge-${variant} tis-badge-${size} ${className}`}>
      {icon && <span className="tis-badge-icon">{icon}</span>}
      <span className="tis-badge-label">{children}</span>
    </span>
  );
};

const trustBadges = [
  {
    icon: <GraduationCap size={20} />,
    label: 'CBSE Affiliated',
    subtext: 'Affiliation No. 3530424',
  },
  {
    icon: <Trophy size={20} />,
    label: 'Ranked Top 5 in UK',
    subtext: 'EducationWorld Rankings',
  },
  {
    icon: <ShieldCheck size={20} />,
    label: 'Safe Boarding Certified',
    subtext: '24/7 Monitored Campus',
  },
  {
    icon: <Globe size={20} />,
    label: '30+ Global Nationalities',
    subtext: 'Diverse Student Body',
  },
  {
    icon: <Award size={20} />,
    label: 'Best Co-Ed Boarding',
    subtext: 'Times School Survey',
  },
];

const Badges = () => {
  return (
    <section className="tis-badges-strip">
      <div className="tis-badges-container">
        <div className="tis-badges-heading">
          <span className="tis-badges-tagline">Recognitions & Accreditations</span>
        </div>

        <div className="tis-badges-grid">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className="tis-trust-badge-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="tis-trust-icon-box">{badge.icon}</div>
              <div className="tis-trust-info">
                <span className="tis-trust-label" title={badge.label}>
                  {badge.label}
                </span>
                <span className="tis-trust-subtext" title={badge.subtext}>
                  {badge.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;