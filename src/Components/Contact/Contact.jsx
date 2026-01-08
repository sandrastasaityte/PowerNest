import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message sent ✅ (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="info-page">
      <div className="info-card">
        <h1>Contact</h1>
        <p className="muted">
          Need help? Send us a message and we’ll reply as soon as possible
          (demo).
        </p>

        <div className="contact-grid">
          {/* LEFT: DETAILS + MAP */}
          <div className="contact-details">
            <h2>Support</h2>
            <p>
              <b>Email:</b> support@powernest.demo
            </p>
            <p>
              <b>Hours:</b> Mon–Fri, 9:00–17:00
            </p>
            <p>
              <b>Location:</b> United Kingdom
            </p>

            <h2>Common topics</h2>
            <ul>
              <li>Order status</li>
              <li>Returns & refunds</li>
              <li>Shipping questions</li>
            </ul>

            {/* ✅ MAP */}
            <div className="contact-map">
              <iframe
                title="PowerNest location (OpenStreetMap)"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.510375%2C51.286760%2C0.334351%2C51.691874&layer=mapnik&marker=51.5074%2C-0.1278"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form className="contact-form" onSubmit={onSubmit}>
            <label className="field">
              <span>Name</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="How can we help?"
                rows={5}
                required
              />
            </label>

            <button className="btn-primary" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
