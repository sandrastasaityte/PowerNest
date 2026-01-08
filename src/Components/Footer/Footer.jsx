import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>PowerNest</h2>
          <p>Your hub for smart electronics & productivity gear.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/category/speaker">Speakers</Link>
            <Link to="/category/headphones">Headphones</Link>
            <Link to="/category/gaming_pc">Gaming PCs</Link>
            <Link to="/category/3d_printer">3D Printers</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/faq">FAQ</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-col newsletter">
            <h4>Stay updated</h4>
            <p>Get product updates & offers (demo).</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PowerNest. All rights reserved.
          </span>
          <span className="footer-legal">
            <span className="disabled">Privacy</span>
            <span className="disabled">Terms</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
