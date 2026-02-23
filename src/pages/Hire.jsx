import React from "react";
import "../styles/App.css";
import hireImage from "../assets/hire.jpg"; 

function Hire() {
  return (
    <div className="page hire-page">

      {/* Hero Section */}
      <div className="hire-hero container">
        
        <div className="hire-image">
          <img src={hireImage} alt="Hire Me" />
        </div>

        <div className="hire-content">
          <h1>Let’s Work Together</h1>

          <p className="hire-description">
            I’m Kureshma M, a passionate Frontend Developer specializing in 
            building responsive and user-friendly web applications using React.js.
            I focus on clean code, modern UI design, and seamless user experience.
          </p>

          <div className="hire-buttons">
            <a
              href="mailto:kureshma04@gmail.com"
              className="primary-btn"
            >
              Email Me
            </a>

            <a
              href="/contact"
              className="secondary-btn"
            >
              Contact Page
            </a>
          </div>
        </div>

      </div>


      {/* Skills Highlight */}
      <div className="hire-skills container">
        <h2>What I Can Help You With</h2>

        <div className="skills-grid">
          <div className="skill-card">Responsive React Applications</div>
          <div className="skill-card">API Integration</div>
          <div className="skill-card">Clean UI Implementation</div>
          <div className="skill-card">Website Deployment</div>
        </div>
      </div>


      {/* Final CTA */}
      <div className="hire-cta">
        <p>Currently available for Frontend & Junior Developer roles.</p>
        <a
          href="mailto:kureshma04@gmail.com"
          className="primary-btn"
        >
          Hire Me Now
        </a>
      </div>

    </div>
  );
}

export default Hire;