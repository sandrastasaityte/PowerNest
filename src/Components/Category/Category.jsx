import React, { useContext, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Category.css";

const formatLabel = (text = "") =>
  text
    .replaceAll("_", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

const Category = () => {
  const { category } = useParams();
  const { all_product = [] } = useContext(ShopContext);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("price_asc"); // price_asc | price_desc | name_asc

  const label = formatLabel(category || "");

  const items = useMemo(() => {
    const cat = (category || "").toLowerCase();
    const q = query.trim().toLowerCase();

    let list = all_product.filter(
      (p) => (p.category || "").toLowerCase() === cat
    );

    if (q) {
      list = list.filter((p) => {
        const name = (p.name || "").toLowerCase();
        const brand = (p.brand || "").toLowerCase();
        return name.includes(q) || brand.includes(q);
      });
    }

    const price = (p) => Number(p.new_price || 0);

    if (sort === "price_asc") list.sort((a, b) => price(a) - price(b));
    if (sort === "price_desc") list.sort((a, b) => price(b) - price(a));
    if (sort === "name_asc")
      list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));

    return list;
  }, [all_product, category, query, sort]);

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="category-title">
          <h1>{label || "Category"}</h1>
          <p>{items.length} item{items.length === 1 ? "" : "s"}</p>
        </div>

        <div className="category-controls">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search in this category…"
            aria-label="Search products"
          />

          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
            <option value="name_asc">Name: A → Z</option>
          </select>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="category-empty">
          <p>No products found in this category.</p>
          <Link to="/" className="category-back">
            Go back home
          </Link>
        </div>
      ) : (
        <div className="category-grid">
          {items.map((p) => {
            const img = p.main_image || p.images?.[0];
            const price = Number(p.new_price || 0).toFixed(2);

            return (
              <Link to={`/product/${p.id}`} className="category-card" key={p.id}>
                {p.badge ? <span className="category-badge">{p.badge}</span> : null}

                <div className="category-imgWrap">
                  <img src={img} alt={p.name} loading="lazy" />
                </div>

                <div className="category-cardBody">
                  <h3 title={p.name}>{p.name}</h3>
                  <p className="category-brand">{p.brand || "Generic"}</p>

                  <div className="category-priceRow">
                    <span className="category-price">£{price}</span>
                    {p.old_price ? (
                      <span className="category-old">
                        £{Number(p.old_price).toFixed(2)}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
