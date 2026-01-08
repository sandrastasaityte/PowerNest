import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const formatLabel = (text = "") =>
  text
    .replaceAll("_", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

const Breadcrumbs = ({ category, name }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="separator">/</li>

        <li>
          {category ? (
            <Link to={`/category/${category}`}>
              {formatLabel(category)}
            </Link>
          ) : (
            <span>Category</span>
          )}
        </li>

        <li className="separator">/</li>

        <li className="current">
          {name || "Product"}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
