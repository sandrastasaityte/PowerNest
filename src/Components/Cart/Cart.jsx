import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Cart.css";

const Cart = () => {
  const {
    all_product = [],
    cartItems = {},
    increaseQty,
    decreaseQty,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useContext(ShopContext);

  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const itemsInCart = useMemo(() => {
    return all_product
      .map((p) => ({
        ...p,
        qty: Number(cartItems[String(p.id)] || 0),
      }))
      .filter((p) => p.qty > 0);
  }, [all_product, cartItems]);

  const subtotal = Number(getCartTotal?.() || 0);
  const shipping = subtotal > 0 ? 0 : 0;

  const promoCode = promo.trim().toUpperCase();
  const discount =
    promoApplied && promoCode === "SAVE10"
      ? Number((subtotal * 0.1).toFixed(2))
      : 0;

  const total = Number((subtotal + shipping - discount).toFixed(2));

  if (itemsInCart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to continue.</p>
          <Link to="/" className="btn-primary">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <button className="cart-clear" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <div className="cart-layout">
        {/* ITEMS */}
        <div className="cart-list">
          {itemsInCart.map((p) => {
            const lineTotal = (p.qty * Number(p.new_price || 0)).toFixed(2);
            const img = p.main_image || p.images?.[0];

            return (
              <div className="cart-item" key={p.id}>
                <img src={img} alt={p.name} className="cart-img" />

                <div className="cart-info">
                  <Link to={`/product/${p.id}`} className="cart-name">
                    {p.name}
                  </Link>
                  <p className="cart-price">
                    £{Number(p.new_price || 0).toFixed(2)}
                  </p>
                </div>

                <div className="cart-qty">
                  <button onClick={() => decreaseQty(p.id)}>-</button>
                  <span>{p.qty}</span>
                  <button onClick={() => increaseQty(p.id)}>+</button>
                </div>

                <div className="cart-line">
                  <p>£{lineTotal}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUMMARY */}
        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>£{shipping.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="summary-row discount">
              <span>Discount</span>
              <span>-£{discount.toFixed(2)}</span>
            </div>
          )}

          <div className="summary-total">
            <span>Total</span>
            <span>£{total.toFixed(2)}</span>
          </div>

          <div className="promo">
            <input
              placeholder="Promo code (SAVE10)"
              value={promo}
              onChange={(e) => {
                setPromo(e.target.value);
                setPromoApplied(false);
              }}
            />
            <button
              className="btn-secondary"
              onClick={() => setPromoApplied(true)}
              disabled={!promo}
            >
              Apply
            </button>
          </div>

          <Link to="/checkout" className="btn-primary checkout-btn">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
