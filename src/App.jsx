import React from 'react';

// Animation Standout Features
import ScrollProgress from './Components/Animation/ScrollProgress/ScrollProgress';
import CustomCursor from './Components/Animation/CustomCursor/CustomCursor';

// Layout
import Navbar from './Components/Layout/Navbar/Navbar';
import Footer from './Components/Layout/Footer/Footer';

// UI Primitives
import Badges from './Components/Ui/Badges/Badges';

// Sections
import Herosection from './Components/Sections/Herosection/Herosection';
import Aboutsection from './Components/Sections/Aboutsection/Aboutsection';
import Programs from './Components/Sections/Programs/Programs';
import Testimonials from './Components/Sections/Testimonials/Testimonials';
import Cta from './Components/Sections/Cta/Cta';

const App = () => {
  return (
    <div style={{ backgroundColor: '#071124', minHeight: '100vh', color: '#ffffff', position: 'relative' }}>
      {/* 1. Standout Animation Features */}
      <ScrollProgress />
      <CustomCursor />

      {/* 2. Top Navigation */}
      <Navbar />

      {/* 3. Main Content Sections with Explicit Target Anchors */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Herosection />
        </section>

        {/* Accreditations Strip */}
        <Badges />

        {/* About Section */}
        <section id="about">
          <Aboutsection />
        </section>

        {/* Academics & Programs */}
        <section id="academics">
          <Programs />
        </section>

        {/* Boarding Life */}
        <section id="boarding">
          <Testimonials />
        </section>

        {/* Campus Life & Facilities Highlights */}
        <section id="campus-life" className="tis-anchor-section">
          <div className="tis-section-placeholder-container">
            <span className="tis-section-badge">Life at TIS</span>
            <h2 className="tis-section-title">22-Acre Vibrant Campus Life</h2>
            <p className="tis-section-desc">
              From international shooting ranges and horse riding arenas to advanced robotics labs and amphitheater performances.
            </p>
          </div>
        </section>

        {/* Admissions & Apply Section */}
        <section id="admissions">
          <Cta />
        </section>
      </main>

      {/* 4. Contact & Footer */}
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default App;