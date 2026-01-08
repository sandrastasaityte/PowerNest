import React from "react";
import "./Returns.css";

const Returns = () => {
  return (
    <div className="info-page">
      <div className="info-card">
        <h1>Returns & Refunds</h1>
        <p className="muted">
          This is a demo store policy page. Replace with your real returns policy.
        </p>

        <h2>Returns window</h2>
        <p>
          You can request a return within <b>14 days</b> of delivery (demo).
        </p>

        <h2>Return conditions</h2>
        <ul>
          <li>Item must be unused and in original packaging</li>
          <li>Proof of purchase may be required</li>
          <li>Some items may be non-returnable (e.g., hygiene products)</li>
        </ul>

        <h2>Refunds</h2>
        <p>
          Refunds are processed back to the original payment method after we receive
          and inspect the returned item (demo).
        </p>

        <h2>How to start a return</h2>
        <ol>
          <li>Contact us with your order details</li>
          <li>We’ll confirm eligibility and provide instructions</li>
          <li>Send the item back and keep your proof of postage</li>
        </ol>
      </div>
    </div>
  );
};

export default Returns;
