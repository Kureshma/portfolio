import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>

      <div className="about-container">

        {/* Professional Introduction */}
        <div className="about-card">
          <h2>Professional Introduction</h2>
          <p>
            I am <strong> Kureshma M</strong> , a passionate and motivated Frontend Developer
             with a strong foundation in modern web technologies. I specialize in building responsive,
              user-friendly, and visually appealing web applications using React.js and JavaScript.
               I focus on writing clean, maintainable code and creating seamless user experiences
                that align with modern UI standards.
          </p>
        </div>

        {/* Career Objective */}
        <div className="about-card">
          <h2>Career Objective</h2>
          <p>
            To begin my professional journey as a Frontend Developer in a growth-oriented organization
             where I can apply my React.js and JavaScript skills to build high-quality web applications. 
             I aim to continuously enhance my technical expertise and expand my knowledge toward becoming a MERN Stack Developer.
          </p>
        </div>

        {/* Technical Skills Detailed */}
        <div className="about-card">
          <h2>Technical Skills</h2>

          <p>
            <strong>Frontend Development:</strong> HTML5, CSS3, JavaScript (ES6+), 
            Bootstrap, Tailwind CSS, React.js, JSX, React Router, API Integration
          </p>

          <p>
            <strong>Tools & Version Control:</strong> Git, GitHub, VS Code, Netlify
          </p>

          <p>
            <strong>Programming & Concepts:</strong> Component-Based Architecture, 
            Frontend Logic Implementation, Basic Java
          </p>
        </div>
        

       

        {/* Strengths */}
        <div className="about-card">
          <h2>Strengths & Work Style</h2>
          <ul>
            <li>Quick learner and adaptable to new technologies</li>
            <li>Detail-oriented and quality-focused</li>
            <li>Good communication and teamwork skills</li>
            <li>Continuous learner with strong interest in modern web development</li>
          </ul>
        </div>

         {/* future goals */}
        <div className="about-card">
          <h2>Future Goals</h2>
          <p>
            I am currently expanding my knowledge toward the MERN Stack 
            (MongoDB, Express.js, React.js, Node.js) to grow as a Full-Stack Developer and 
            build scalable end-to-end web applications
          </p>
        </div>

      </div>

      {/* Bottom CTA Section */}
      <div className="about-cta">
        <p>Interested in collaborating or learning more about my work?</p>

        <div className="cta-buttons">
          <button onClick={() => navigate("/projects")} className="primary-btn">
            View My Work
          </button>

          <button onClick={() => navigate("/hire")} className="secondary-btn">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;