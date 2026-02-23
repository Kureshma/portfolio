import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import contactImage from "../assets/contact.jpg";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="page contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        I am open to internships, junior developer roles, and freelance
        opportunities. Feel free to contact me for collaborations or queries.
      </p>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info card">

          {/* 🔹 Image Section */}
          <div className="contact-image-wrapper">
            <img src={contactImage} alt="Contact" />
          </div>

          <h2>Contact Information</h2>

          <div className="info-item">
            <h4>Email</h4>
            <p>
              <a href="mailto:kureshma04@gmail.com">
                kureshma04@gmail.com
              </a>
            </p>
          </div>

          <div className="info-item">
            <h4>Location</h4>
            <p>Tamil Nadu, India</p>
          </div>

          <div className="info-item">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kureshma-kureshma-b02939377/">LinkedIn</a>
              <a href="https://github.com/Kureshma">GitHub</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form card">
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="success-popup">
          ✅ Message sent successfully!
        </div>
      )}

      <div className="contact-cta">
        <p>Let’s build something impactful together.</p>
        <button
          className="primary-btn"
          onClick={() => navigate("/hire")}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Contact;