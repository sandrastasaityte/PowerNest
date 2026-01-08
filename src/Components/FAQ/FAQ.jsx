import React, { useMemo, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const items = useMemo(
    () => [
      {
        q: "How long does shipping take?",
        a: "Standard delivery is usually 2–5 business days. Express delivery is 1–2 business days (demo).",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — free standard shipping on all orders in this demo store. Update this for your real policy.",
      },
      {
        q: "Can I track my order?",
        a: "If tracking is available, we’ll email you a tracking link after dispatch.",
      },
      {
        q: "What is your returns policy?",
        a: "You can request a return within 14 days of delivery (demo). Items must be unused and in original packaging.",
      },
      {
        q: "When will I receive my refund?",
        a: "Refunds are processed after the returned item is received and inspected (demo).",
      },
      {
        q: "Can I change my delivery address after ordering?",
        a: "Contact us as soon as possible. Address changes are only possible before your order is dispatched.",
      },
      {
        q: "What payment methods do you accept?",
        a: "This is a demo checkout. Once you add Stripe/PayPal, list your real methods here.",
      },
      {
        q: "My item is out of stock — what can I do?",
        a: "If an item is out of stock, you can check back later. You can also contact support to ask about restocks.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="info-page">
      <div className="info-card">
        <h1>FAQ</h1>
        <p className="muted">
          Quick answers to common questions. If you need more help, contact us.
        </p>

        <div className="faq">
          {items.map((item, i) => {
            const open = i === openIndex;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{open ? "−" : "+"}</span>
                </button>

                {open ? <div className="faq-a">{item.a}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
