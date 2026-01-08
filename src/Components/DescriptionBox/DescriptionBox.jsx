import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = ({ description, features = [] }) => {
  const [tab, setTab] = useState("description");

  if (!description && (!features || features.length === 0)) return null;

  return (
    <div className="desc-box">
      <div className="desc-tabs">
        <button
          className={tab === "description" ? "active" : ""}
          onClick={() => setTab("description")}
        >
          Description
        </button>

        {features.length > 0 && (
          <button
            className={tab === "features" ? "active" : ""}
            onClick={() => setTab("features")}
          >
            Features
          </button>
        )}
      </div>

      <div className="desc-content">
        {tab === "description" && (
          <p className="desc-text">{description}</p>
        )}

        {tab === "features" && (
          <ul className="desc-features">
            {features.map((f, i) => (
              <li key={`${f}-${i}`}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
