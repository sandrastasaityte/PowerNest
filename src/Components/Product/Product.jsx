import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const { all_product = [], addToCart, cartItems = {} } = useContext(ShopContext);

  const product = useMemo(() => {
    const pidNum = Number(id);
    return all_product.find(
      (p) => String(p.id) === String(id) || (Number.isFinite(pidNum) && p.id === pidNum)
    );
  }, [all_product, id]);

  const gallery = useMemo(() => {
    if (!product) return [];

    const base = [
      product.main_image || product.images?.[0],
      ...(product.thumbnails || []),
      ...(product.images || []),
    ].filter(Boolean);

    // Keep order, remove duplicates
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

  if (!product) {
    return (
      <div className="product-page">
        <p className="product-notfound">Product not found.</p>
        <Link to="/" className="product-back">
          Go back home
        </Link>
      </div>
    );
  }

  const qtyInCart = Number(cartItems[String(product.id)] || 0);
  const stock = Number(product.stock || 0);
  const inStock = stock > 0;

  const price = Number(product.new_price || 0).toFixed(2);

  return (
    <div className="product-page">
      <Breadcrumbs category={product.category} name={product.name} />

      <div className="product-wrap">
        {/* LEFT: Gallery */}
        <div className="product-gallery">
          <div className="product-thumbs" aria-label="Product images">
            {gallery.map((img, idx) => (
              <button
                key={`${idx}-${img}`}
                type="button"
                className={`thumb ${img === mainImage ? "active" : ""}`}
                onClick={() => setMainImage(img)}
                aria-label={`Show image ${idx + 1}`}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="product-main">
            <img src={mainImage || gallery[0]} alt={product.name} />
          </div>
        </div>

        {/* RIGHT: Info */}
        <div className="product-info">
          {product.badge ? <span className="product-badge">{product.badge}</span> : null}

          <h1 className="product-title">{product.name}</h1>

          <div className="product-meta">
            <span>Brand: <b>{product.brand || "Generic"}</b></span>

            {product.rating != null ? (
              <span>
                ★ {Number(product.rating || 0).toFixed(1)}
                {product.reviews ? <span className="muted"> ({product.reviews})</span> : null}
              </span>
            ) : null}
          </div>

          <div className="product-prices">
            <span className="new">£{price}</span>
            {product.old_price ? (
              <span className="old">£{Number(product.old_price).toFixed(2)}</span>
            ) : null}
          </div>

          {product.description ? (
            <p className="product-desc">{product.description}</p>
          ) : null}

          {Array.isArray(product.features) && product.features.length > 0 ? (
            <ul className="product-features">
              {product.features.map((f, i) => (
                <li key={`${f}-${i}`}>{f}</li>
              ))}
            </ul>
          ) : null}

          <div className="product-actions">
            <button
              className="add-btn"
              onClick={() => addToCart?.(product.id, 1)}
              disabled={!inStock}
              title={!inStock ? "Out of stock" : ""}
              type="button"
            >
              {inStock ? "Add to Cart" : "Out of stock"}
            </button>

            <Link to="/cart" className="view-cart">
              View Cart {qtyInCart > 0 ? `(${qtyInCart})` : ""}
            </Link>
          </div>

          <p className={`stock ${inStock ? "ok" : "bad"}`}>
            {inStock ? `In stock: ${stock}` : "Out of stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
