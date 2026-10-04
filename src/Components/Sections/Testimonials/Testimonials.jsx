import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Sunita & Rajesh Aggarwal',
    role: 'Parents of Rohan Aggarwal',
    relation: 'Grade XII (Batch of 2025)',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote:
      'Enrolling Rohan at TIS was the best decision for his character. The balance between academic discipline and pastoral mentoring helped him gain independence while securing admission into IIT Roorkee.',
    destination: 'IIT Roorkee, Computer Science',
    rating: 5,
  },
  {
    id: 2,
    name: 'Aanya Vardhan',
    role: 'Alumna, Head Girl (2023)',
    relation: 'Full Residential Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote:
      'The Modern Gurukul ethos taught me how to lead under pressure. From Model UN debates to evening horse riding sessions, TIS prepared me for collegiate life at the University of Toronto.',
    destination: 'University of Toronto (Scholarship Recipient)',
    rating: 5,
  },
  {
    id: 3,
    name: 'Col. Arvind & Meera Thapa',
    role: 'Parents of Ananya Thapa',
    relation: 'Grade IX Boarder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Coming from a defense background, discipline and physical fitness were paramount. The 22-acre campus, world-class shooting range, and attentive housemasters offer an exceptional safe haven for our daughter.',
    destination: 'State Athletics Silver Medalist',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="tis-testimonials-section">
      <div className="tis-testimonials-container">
        <motion.div
          className="tis-testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="tis-testimonials-badge">Voices of Trust</span>
          <h2 className="tis-testimonials-title">
            Parent Perspectives & <span className="tis-testimonials-gold">Alumni Triumphs</span>
          </h2>
          <p className="tis-testimonials-subtitle">
            Hear from the families and students whose life trajectories were transformed 
            by the holistic ethos of Tulas International School.
          </p>
        </motion.div>

        <div className="tis-testimonial-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="tis-testimonial-card"
            >
              <div className="tis-testimonial-quote-icon-wrap">
                <Quote className="tis-quote-icon" />
              </div>

              <div className="tis-testimonial-stars">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="tis-star-icon" />
                ))}
              </div>

              <p className="tis-testimonial-text">“{current.quote}”</p>

              {current.destination && (
                <div className="tis-testimonial-destination">
                  <GraduationCap className="tis-dest-icon" />
                  <span>{current.destination}</span>
                </div>
              )}

              <div className="tis-testimonial-author-row">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="tis-author-avatar"
                />
                <div className="tis-author-info">
                  <h4 className="tis-author-name">{current.name}</h4>
                  <span className="tis-author-role">{current.role}</span>
                  <span className="tis-author-relation">{current.relation}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="tis-carousel-controls">
            <button
              type="button"
              onClick={handlePrev}
              className="tis-carousel-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="tis-carousel-dots">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`tis-carousel-dot ${currentIndex === idx ? 'tis-dot-active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="tis-carousel-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;