import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Home.css";

const Home = () => {
  const { all_product = [] } = useContext(ShopContext);

  const popular = useMemo(() => {
    return [...all_product]
      .sort((a, b) => {
        const ar = Number(a.rating || 0);
        const br = Number(b.rating || 0);
        if (br !== ar) return br - ar;
        return Number(b.reviews || 0) - Number(a.reviews || 0);
      })
      .slice(0, 8);
  }, [all_product]);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Upgrade Your Tech</h1>
          <p>Smart electronics for work, gaming & creativity.</p>

          <div className="hero-actions">
            <Link to="/category/speaker" className="btn-primary">
              Shop Now
            </Link>
            <a href="#categories" className="btn-secondary">
              Browse Categories
            </a>
          </div>

          <div className="hero-badges">
            <span className="chip">Fast delivery (demo)</span>
            <span className="chip">Secure checkout (demo)</span>
            <span className="chip">Top-rated gear</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="section-head">
          <h2>Shop by Category</h2>
          <Link to="/category/speaker" className="section-link">
            View all →
          </Link>
        </div>

        <div className="cat-grid">
          <Link to="/category/speaker" className="cat-card">
            <span className="cat-title">Speakers</span>
            <span className="cat-sub">Portable, loud, RGB</span>
          </Link>
          <Link to="/category/headphones" className="cat-card">
            <span className="cat-title">Headphones</span>
            <span className="cat-sub">ANC, wireless, comfort</span>
          </Link>
          <Link to="/category/webcam" className="cat-card">
            <span className="cat-title">Webcams</span>
            <span className="cat-sub">Meetings & streaming</span>
          </Link>
          <Link to="/category/usb_hub" className="cat-card">
            <span className="cat-title">USB Hubs</span>
            <span className="cat-sub">Ports, HDMI, PD</span>
          </Link>
          <Link to="/category/usb_switch" className="cat-card">
            <span className="cat-title">USB Switches</span>
            <span className="cat-sub">Share devices easily</span>
          </Link>
          <Link to="/category/gaming_pc" className="cat-card">
            <span className="cat-title">Gaming PCs</span>
            <span className="cat-sub">High FPS setups</span>
          </Link>
          <Link to="/category/3d_printer" className="cat-card">
            <span className="cat-title">3D Printers</span>
            <span className="cat-sub">Create & prototype</span>
          </Link>
        </div>
      </section>

      {/* POPULAR */}
      <section className="section">
        <div className="section-head">
          <h2>Popular Products</h2>
          <Link to="/category/speaker" className="section-link">
            Shop more →
          </Link>
        </div>

        <div className="product-grid">
          {popular.map((item) => {
            const img = item.main_image || item.images?.[0];
            const price = Number(item.new_price || 0).toFixed(2);

            return (
              <Link to={`/product/${item.id}`} key={item.id} className="product-card">
                {item.badge ? <span className="badge">{item.badge}</span> : null}

                <div className="imgWrap">
                  <img src={img} alt={item.name} loading="lazy" />
                </div>

                <div className="cardBody">
                  <h3 title={item.name}>{item.name}</h3>

                  <div className="metaRow">
                    <span className="brand">{item.brand || "Generic"}</span>
                    <span className="rating">
                      ★ {Number(item.rating || 0).toFixed(1)}
                    </span>
                  </div>

                  <div className="priceRow">
                    <span className="price">£{price}</span>
                    {item.old_price ? (
                      <span className="old">
                        £{Number(item.old_price).toFixed(2)}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
