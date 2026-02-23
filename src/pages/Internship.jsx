import React from "react";
import "../styles/Internship.css";

function Internship() {
  const internships = [
    {
      role: "Frontend Developer Intern",
      company: "I-BACUS Tech Solutions, Coimbatore",
      duration: "Dec 2026 – Mar 2026",
      points: [
        "Learned and implemented React.js for frontend development.",
        "Developed small components and understood component-based architecture."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Technofly Solutions, Bangalore",
      duration: "2025 (1 Week)",
      points: [
        "Created dynamic web pages using HTML, CSS, and JavaScript.",
        "Gained hands-on experience in frontend design and functionality."
      ]
    },
    {
      role: "Java Developer Intern",
      company: "A.K. Infopark, Parvathipuram",
      duration: "2025 (15 Days)",
      points: [
        "Built a Flipkart clone using HTML, CSS, and JavaScript.",
        "Learned integration of frontend elements for e-commerce functionality."
      ]
    },
    {
      role: "UI/UX Intern",
      company: "Technovolt, Coimbatore",
      duration: "2024 (1 Week)",
      points: [
        "Designed user interfaces using Figma and Canva.",
        "Focused on creating visually appealing and user-friendly designs."
      ]
    }
  ];

  return (
    <section className="internship-section">

      <h1 className="internship-title">Internship Experience</h1>

      <div className="internship-container">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>
            <h2>{item.role}</h2>
            <h3>{item.company}</h3>
            <span className="duration">{item.duration}</span>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COURSES SECTION */}
      <h1 className="internship-title">Course Completed</h1>

      <div className="course-container">
        <div className="course-card">
          <h2>Java Full Stack Development</h2>
          <p>Completed comprehensive Java Full Stack training in 2024.</p>

          <a 
            href="/certificate.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            View Certificate
          </a>
        </div>
      </div>

    </section>
  );
}

export default Internship;
