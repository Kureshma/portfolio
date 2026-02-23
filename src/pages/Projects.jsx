import React from "react";
import "../styles/Projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Projects() {
  const projects = [
   
    {
      title: "Climorph - Weather App",
      image: project3,
      description:
        "Created a React.js app fetching real-time weather data from an API with dynamic theming and full responsiveness.",
      tech: "React.js, API Integration",
      link: "https://weather-app-w1012.netlify.app/",
      github: "https://github.com/Kureshma/weather-app"
    },
    {
      title: "JoyBit App",
      image: project4,
      description:
        "Developed a modular React.js application with reusable components focusing on interactive UI experience.",
      tech: "React.js, Component Architecture",
      link: "https://joybit-app.netlify.app/",
      github: "https://github.com/Kureshma/Joybit-app"
    },
    {
      title: "Calculator",
      image: project2,
      description:
        "Built a React.js calculator supporting arithmetic operations while strengthening state management understanding.",
      tech: "React.js",
      link: "https://calculator-c4438.netlify.app/",
      github: "https://github.com/Kureshma/calculator-react-app"
    },

     {
      title: "FunZone – Kids Shopping Website",
      image: project1,
      description:
        "Developed a responsive e-commerce site using HTML, CSS, and JavaScript with interactive product browsing and cart functionality.",
      tech: "HTML, CSS, JavaScript",
      link: "https://funzone-kids.netlify.app/",
      github: "https://github.com/Kureshma/funzone"
    },
    
    {
      title: "MoonPetal – Role-Based Authentication App",
      image: project5,
      description:
        "Built role-based authentication using React.js and localStorage with separate dashboards for Admin and User.",
      tech: "React.js, LocalStorage",
      link: "https://moonpetal-auth.netlify.app/",
      github: "https://github.com/Kureshma/role-based-auth"
    }
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <p className="tech">
                <strong>Technologies Used:</strong> {project.tech}
              </p>

              {/* Buttons */}
              <div className="project-buttons">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-btn"
                >
                  View Code
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;