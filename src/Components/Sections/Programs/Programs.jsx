import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ArrowUpRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import './Programs.css';

const programsData = [
  {
    id: 'primary',
    badge: 'Foundation Years',
    grades: 'Grades IV – V',
    title: 'Primary School Academy',
    curriculum: 'Inquiry-Based Learning & Experiential Foundations',
    description:
      'Cultivating curiosity, linguistic agility, and emotional resilience through collaborative problem-solving, arts, and early STEM exposure.',
    highlights: [
      'Activity-driven thematic learning framework',
      'Dedicated pastoral mentorship & language labs',
      'Daily physical training, yoga, and swimming',
      'Individualized reading & numeracy tracking',
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'middle',
    badge: 'Exploration & Growth',
    grades: 'Grades VI – VIII',
    title: 'Middle Years Program',
    curriculum: 'Rigorous CBSE Foundation & Global Exposure',
    description:
      'Encouraging analytical reasoning, scientific exploration, and ethical values as students navigate subject specializations and team sports.',
    highlights: [
      'Advanced robotics, coding, and maker-space labs',
      'Inter-house debates, Model UN & foreign languages',
      'Horse riding, rifle shooting, and competitive athletics',
      'Life skills, leadership modules, and ethical seminars',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'senior',
    badge: 'Scholastic Mastery',
    grades: 'Grades IX – XII',
    title: 'Senior Secondary School',
    curriculum: 'CBSE Affiliated • Science, Commerce & Humanities',
    description:
      'Comprehensive university preparatory training combining board exam excellence with specialized coaching for JEE, NEET, CUET, and SAT.',
    highlights: [
      'High-tech physics, chemistry, bio & AI labs',
      'Integrated competitive test preparation on campus',
      'Dedicated Ivy-League & overseas admissions desk',
      'Internship opportunities & corporate guest lectures',
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState('senior');

  const selectedProgram = programsData.find((p) => p.id === activeTab) || programsData[2];

  return (
    <section id="academics" className="tis-programs-section">
      <div className="tis-programs-container">
        <motion.div
          className="tis-programs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tis-programs-pill">Academic Pathways</span>
          <h2 className="tis-programs-title">
            Tailored Excellence Across <span className="tis-programs-gold">Every Grade Level</span>
          </h2>
          <p className="tis-programs-subtitle">
            From formative curiosity to university-bound leadership, our holistic curriculum empowers students 
            with critical inquiry, emotional depth, and competitive edge.
          </p>
        </motion.div>

        <div className="tis-programs-tabs">
          {programsData.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`tis-program-tab-btn ${activeTab === item.id ? 'tis-tab-active' : ''}`}
            >
              <GraduationCap className="tis-tab-icon" />
              <div className="tis-tab-text-group">
                <span className="tis-tab-badge">{item.grades}</span>
                <span className="tis-tab-name">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        <motion.div
          key={selectedProgram.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="tis-program-card"
        >
          <div className="tis-program-details">
            <div className="tis-program-meta">
              <span className="tis-meta-badge">{selectedProgram.badge}</span>
              <span className="tis-meta-grades">{selectedProgram.grades}</span>
            </div>

            <h3 className="tis-program-card-title">{selectedProgram.title}</h3>
            <p className="tis-program-curriculum">
              <BookOpen className="tis-curriculum-icon" />
              <span>{selectedProgram.curriculum}</span>
            </p>

            <p className="tis-program-card-desc">{selectedProgram.description}</p>

            <div className="tis-program-highlights-block">
              <h4 className="tis-highlights-heading">Key Program Pillars:</h4>
              <ul className="tis-program-list">
                {selectedProgram.highlights.map((point, index) => (
                  <li key={index} className="tis-program-list-item">
                    <CheckCircle2 className="tis-list-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tis-program-actions">
              <a href="#admissions-form" className="tis-program-primary-btn">
                <span>Inquire for {selectedProgram.grades}</span>
                <ArrowUpRight className="tis-action-arrow" />
              </a>
              <a href="#syllabus" className="tis-program-outline-btn">
                Download Curriculum Guide
              </a>
            </div>
          </div>

          <div className="tis-program-visual">
            <div className="tis-program-image-wrap">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="tis-program-image"
              />
              <div className="tis-image-overlay-card">
                <Award className="tis-overlay-icon" />
                <div>
                  <span className="tis-overlay-title">CBSE Affiliated</span>
                  <span className="tis-overlay-sub">Code No. 3530424</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;