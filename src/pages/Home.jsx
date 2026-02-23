import React from "react";
import profile from "../assets/profile.png";
import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="home-container">

          {/* LEFT SIDE IMAGE */}
          <div className="home-image">
            <img src={profile} alt="Kureshma" />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="home-content">
            <h1>
              Hey, I'm <span className="highlight">Kureshma</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p>
              I build clean, professional, and user-focused web applications
              with modern and elegant design principles.
            </p>

            <a href="/resume.pdf" download className="primary-btn">
              Download CV
            </a>
          </div>

        </div>
      </section>

      {/* INTRODUCTION CARD SECTION */}
      <section className="intro-section">
        <div className="intro-card">
          <h2>Introduction</h2>

          <p>
           Aspiring Frontend Developer with hands-on experience in React.js, HTML, CSS, JavaScript,Bootstrap and Java(basics).
           Currently interning at I-BACUS Tech Solutions, developing responsive, component-based user interfaces.
           Experienced in API integration, Git-based collaboration, and deploying applications using Netlify. Seeking
           an entry-level Frontend / React Developer role to contribute and grow professionally.
          </p>

          <a href="/projects" className="secondary-btn">
            View My Work
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
