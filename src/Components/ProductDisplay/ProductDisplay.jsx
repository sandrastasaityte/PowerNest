// src/Components/ProductDisplay/ProductDisplay.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  const gallery = useMemo(() => {
    if (!product) return [];

    const base = [
      product.main_image || product.images?.[0],
      ...(product.thumbnails || []),
      ...(product.images || []),
    ].filter(Boolean);

    // remove duplicates but keep order
    const seen = new Set();
    return base.filter((img) => {
      if (seen.has(img)) return false;
      seen.add(img);
      return true;
    });
  }, [product]);

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setMainImage(gallery[0] || "");
  }, [gallery]);

  if (!product) return null;

  return (
    <div className="product-display">
      {/* IMAGES */}
      <div className="pd-images">
        <div className="pd-thumbs" aria-label="Product images">
          {gallery.map((img, index) => (
            <button
              key={`${index}-${img}`}
              type="button"
              className={`pd-thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
              aria-label={`Show image ${index + 1}`}
            >
              <img src={img} alt={`${product.name} ${index + 1}`} />
            </button>
          ))}
        </div>

        <div className="pd-main">
          <img src={mainImage || gallery[0]} alt={product.name} />
        </div>
      </div>

      {/* INFO */}
      <div className="pd-info">
        <h1 className="pd-title">{product.name}</h1>

        <div className="pd-price">
          £{Number(product.new_price || 0).toFixed(2)}
          {product.old_price ? (
            <span className="pd-old">
              £{Number(product.old_price).toFixed(2)}
            </span>
          ) : null}
        </div>

        {product.description ? (
          <p className="pd-desc">{product.description}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDisplay;
