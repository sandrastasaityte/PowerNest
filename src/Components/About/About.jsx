import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="info-page">
      <div className="info-card">
        <h1>About PowerNest</h1>

        <p className="muted about-highlight">
          PowerNest is a demo e-commerce project built to showcase a modern,
          full-featured online electronics store.
        </p>

        <div className="about-section">
          <h2>Who we are</h2>
          <p>
            PowerNest was created as a hands-on project focused on building a
            complete shopping experience — from browsing products and managing a
            cart to checkout and admin management.
          </p>
        </div>

        <div className="about-section">
          <h2>What we offer</h2>
          <ul>
            <li>Smart electronics for work, gaming, and creativity</li>
            <li>Clean, fast, and responsive shopping experience</li>
            <li>Modern frontend built with React</li>
            <li>Scalable structure ready for backend integration</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our mission</h2>
          <p>
            The goal of PowerNest is to demonstrate best practices in frontend
            development, UI/UX design, and e-commerce architecture — while
            keeping the experience simple and user-friendly.
          </p>
        </div>

        <span className="about-badge">Demo Project</span>
      </div>
    </div>
  );
};

export default About;
