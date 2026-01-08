import React from "react";
import "./Shipping.css";

const Shipping = () => {
  return (
    <div className="info-page">
      <div className="info-card">
        <h1>Shipping</h1>
        <p className="muted">
          This is a demo store policy page. Replace with your real shipping rules.
        </p>

        <h2>Delivery times</h2>
        <ul>
          <li><b>Standard:</b> 2–5 business days</li>
          <li><b>Express:</b> 1–2 business days</li>
          <li><b>International:</b> 5–12 business days</li>
        </ul>

        <h2>Shipping costs</h2>
        <ul>
          <li><b>Standard:</b> Free on all orders (demo)</li>
          <li><b>Express:</b> £4.99 (demo)</li>
        </ul>

        <h2>Tracking</h2>
        <p>
          If tracking is available, we’ll email you a tracking link after your order
          is shipped.
        </p>

        <h2>Address changes</h2>
        <p>
          Please contact us as soon as possible if you need to update your delivery
          address. Changes are only possible before dispatch.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
