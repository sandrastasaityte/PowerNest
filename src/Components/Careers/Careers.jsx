// src/Components/Careers/Careers.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="careers-card">
        <header className="careers-header">
          <h1>Careers at PowerNest</h1>
          <p className="careers-subtitle">
            PowerNest is a demo e-commerce project showcasing a modern
            electronics store experience. If this were a real company, these are
            the kinds of roles we’d be hiring for.
          </p>
        </header>

        <section className="careers-section">
          <h2>Why work with us</h2>
          <ul className="careers-list">
            <li>Modern React UI and scalable component structure</li>
            <li>Clean UX patterns: product pages, cart, checkout, and admin</li>
            <li>Practical learning: frontend + backend integration-ready</li>
            <li>Focus on performance, accessibility, and maintainability</li>
          </ul>
        </section>

        <section className="careers-section">
          <h2>Open roles (Demo)</h2>

          <div className="role-grid">
            <article className="role-card">
              <div className="role-top">
                <h3>Frontend Developer (React)</h3>
                <span className="role-tag">Remote • Demo</span>
              </div>
              <p className="role-desc">
                Build reusable UI components, optimize performance, and help
                shape a smooth shopping experience.
              </p>
              <ul className="role-bullets">
                <li>React + React Router</li>
                <li>State management & UI patterns</li>
                <li>Responsive CSS</li>
              </ul>
            </article>

            <article className="role-card">
              <div className="role-top">
                <h3>Backend Developer (Node/Express)</h3>
                <span className="role-tag">Hybrid • Demo</span>
              </div>
              <p className="role-desc">
                Design APIs for products, orders, authentication, and admin
                features. Ensure secure and reliable data flow.
              </p>
              <ul className="role-bullets">
                <li>Node.js + Express</li>
                <li>MongoDB models</li>
                <li>Auth & validation</li>
              </ul>
            </article>

            <article className="role-card">
              <div className="role-top">
                <h3>UI/UX Designer</h3>
                <span className="role-tag">Remote • Demo</span>
              </div>
              <p className="role-desc">
                Create clean layouts, consistent spacing, and user-friendly
                flows for browsing, cart, and checkout.
              </p>
              <ul className="role-bullets">
                <li>Design systems</li>
                <li>Wireframes & prototypes</li>
                <li>Accessibility-first</li>
              </ul>
            </article>

            <article className="role-card">
              <div className="role-top">
                <h3>QA Tester</h3>
                <span className="role-tag">Remote • Demo</span>
              </div>
              <p className="role-desc">
                Test key user journeys: product view, add-to-cart, checkout, and
                admin actions. Report bugs clearly.
              </p>
              <ul className="role-bullets">
                <li>Functional testing</li>
                <li>Cross-browser checks</li>
                <li>Edge-case scenarios</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="careers-section">
          <h2>How to apply (Demo)</h2>
          <p className="careers-note">
            This is a demo project, so applications aren’t real — but you can
            use this page as a template for a real store.
          </p>

          <div className="apply-box">
            <div className="apply-left">
              <p className="apply-title">Want to customize this for a real shop?</p>
              <p className="apply-text">
                Add an application form, connect it to your backend, and store
                submissions in MongoDB — or forward them to email.
              </p>
            </div>

            <div className="apply-actions">
              <Link className="btn-primary" to="/contact">
                Contact us
              </Link>
              <Link className="btn-secondary" to="/">
                Back to shop
              </Link>
            </div>
          </div>
        </section>

        <footer className="careers-footer">
          <span className="careers-badge">Demo Careers Page</span>
        </footer>
      </div>
    </div>
  );
};

export default Careers;
