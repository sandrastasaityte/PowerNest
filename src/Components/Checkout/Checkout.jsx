// src/Components/Checkout/Checkout.jsx
import React, { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Checkout.css";

const isEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const onlyDigits = (v = "") => v.replace(/\D/g, "");

const formatCardNumber = (value = "") => {
  const digits = onlyDigits(value).slice(0, 19);
  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatExpiry = (value = "") => {
  const digits = onlyDigits(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const Checkout = () => {
  const navigate = useNavigate();

  const {
    all_product = [],
    cartItems = {},
    getCartTotal,
    removeFromCart,
  } = useContext(ShopContext);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    notes: "",
  });

  // ✅ PAYMENT STATE
  const [paymentMethod, setPaymentMethod] = useState("card"); // card | paypal | bank | cod
  const [card, setCard] = useState({
    nameOnCard: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const itemsInCart = useMemo(() => {
    return all_product
      .map((p) => {
        const qty = Number(cartItems[String(p.id)] || 0);
        return { ...p, qty };
      })
      .filter((p) => p.qty > 0);
  }, [all_product, cartItems]);

  const subtotal = Number(getCartTotal?.() || 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const total = Number((subtotal + shipping).toFixed(2));

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const onPaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (error) setError("");
  };

  const onCardChange = (e) => {
    const { name, value } = e.target;

    // nice formatting for demo
    if (name === "number") {
      setCard((prev) => ({ ...prev, number: formatCardNumber(value) }));
    } else if (name === "expiry") {
      setCard((prev) => ({ ...prev, expiry: formatExpiry(value) }));
    } else if (name === "cvc") {
      setCard((prev) => ({ ...prev, cvc: onlyDigits(value).slice(0, 4) }));
    } else {
      setCard((prev) => ({ ...prev, [name]: value }));
    }

    if (error) setError("");
  };

  const validate = () => {
    if (itemsInCart.length === 0) return "Your cart is empty.";
    if (!form.firstName.trim()) return "First name is required.";
    if (!form.lastName.trim()) return "Last name is required.";
    if (!isEmail(form.email)) return "Please enter a valid email.";
    if (!form.address1.trim()) return "Address is required.";
    if (!form.city.trim()) return "City is required.";
    if (!form.postcode.trim()) return "Postcode is required.";

    // ✅ payment validation
    if (paymentMethod === "card") {
      if (!card.nameOnCard.trim()) return "Name on card is required.";
      const digits = onlyDigits(card.number);
      if (digits.length < 12) return "Card number looks too short.";
      if (!/^\d{2}\/\d{2}$/.test(card.expiry)) return "Expiry must be in MM/YY format.";
      if (onlyDigits(card.cvc).length < 3) return "CVC must be 3–4 digits.";
    }

    return "";
  };

  const clearCart = () => {
    itemsInCart.forEach((p) => removeFromCart?.(p.id));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    setError("");

    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    setSubmitting(true);

    // ✅ DEMO payload (later you’ll send this to backend)
    // const payload = {
    //   customer: form,
    //   payment: { method: paymentMethod, card: paymentMethod === "card" ? card : undefined },
    //   items: itemsInCart,
    //   subtotal,
    //   shipping,
    //   total,
    // };

    clearCart();
    setSuccess(true);

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1200);
  };

  if (success) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <h1>Order placed ✅</h1>
          <p>Thank you! We’ve received your order (demo).</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cartEmpty = itemsInCart.length === 0;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div>
          <h1>Checkout</h1>
          <p className="muted">Enter shipping details and confirm your order.</p>
        </div>

        <Link to="/cart" className="back-link">
          ← Back to Cart
        </Link>
      </div>

      <div className="checkout-layout">
        {/* LEFT: FORM */}
        <form className="checkout-form" onSubmit={placeOrder}>
          <h2>Shipping Details</h2>

          {error ? <div className="form-error">{error}</div> : null}

          <div className="grid-2">
            <label className="field">
              <span>First name *</span>
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="Sandra"
                autoComplete="given-name"
              />
            </label>

            <label className="field">
              <span>Last name *</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Stasaityte"
                autoComplete="family-name"
              />
            </label>
          </div>

          <div className="grid-2">
            <label className="field">
              <span>Email *</span>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span>Phone</span>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+44..."
                autoComplete="tel"
              />
            </label>
          </div>

          <label className="field">
            <span>Address line 1 *</span>
            <input
              name="address1"
              value={form.address1}
              onChange={onChange}
              placeholder="Street, house number"
              autoComplete="address-line1"
            />
          </label>

          <label className="field">
            <span>Address line 2</span>
            <input
              name="address2"
              value={form.address2}
              onChange={onChange}
              placeholder="Apartment, floor, etc."
              autoComplete="address-line2"
            />
          </label>

          <div className="grid-3">
            <label className="field">
              <span>City *</span>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                autoComplete="address-level2"
              />
            </label>

            <label className="field">
              <span>Postcode *</span>
              <input
                name="postcode"
                value={form.postcode}
                onChange={onChange}
                autoComplete="postal-code"
              />
            </label>

            <label className="field">
              <span>Country</span>
              <input
                name="country"
                value={form.country}
                onChange={onChange}
                autoComplete="country-name"
              />
            </label>
          </div>

          <label className="field">
            <span>Order notes</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              placeholder="Delivery instructions (optional)"
              rows={3}
            />
          </label>

          {/* ✅ PAYMENT OPTIONS */}
          <div className="payment-box">
            <h2>Payment</h2>
            <p className="muted tiny">Demo options (no real charge).</p>

            <div className="payment-methods" role="radiogroup" aria-label="Payment method">
              <label className={`pay-option ${paymentMethod === "card" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={onPaymentMethodChange}
                />
                <div>
                  <span className="pay-title">Card</span>
                  <span className="pay-sub">Visa, Mastercard, Amex (demo)</span>
                </div>
              </label>

              <label className={`pay-option ${paymentMethod === "paypal" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={onPaymentMethodChange}
                />
                <div>
                  <span className="pay-title">PayPal</span>
                  <span className="pay-sub">Redirect to PayPal (demo)</span>
                </div>
              </label>

              <label className={`pay-option ${paymentMethod === "bank" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={onPaymentMethodChange}
                />
                <div>
                  <span className="pay-title">Bank transfer</span>
                  <span className="pay-sub">Pay via bank (demo)</span>
                </div>
              </label>

              <label className={`pay-option ${paymentMethod === "cod" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={onPaymentMethodChange}
                />
                <div>
                  <span className="pay-title">Cash on delivery</span>
                  <span className="pay-sub">Pay when delivered (demo)</span>
                </div>
              </label>
            </div>

            {paymentMethod === "card" && (
              <div className="payment-panel">
                <div className="grid-2">
                  <label className="field">
                    <span>Name on card *</span>
                    <input
                      name="nameOnCard"
                      value={card.nameOnCard}
                      onChange={onCardChange}
                      placeholder="Sandra Stasaityte"
                      autoComplete="cc-name"
                    />
                  </label>

                  <label className="field">
                    <span>Card number *</span>
                    <input
                      name="number"
                      value={card.number}
                      onChange={onCardChange}
                      placeholder="1234 5678 9012 3456"
                      inputMode="numeric"
                      autoComplete="cc-number"
                    />
                  </label>
                </div>

                <div className="grid-2">
                  <label className="field">
                    <span>Expiry (MM/YY) *</span>
                    <input
                      name="expiry"
                      value={card.expiry}
                      onChange={onCardChange}
                      placeholder="MM/YY"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                    />
                  </label>

                  <label className="field">
                    <span>CVC *</span>
                    <input
                      name="cvc"
                      value={card.cvc}
                      onChange={onCardChange}
                      placeholder="123"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                    />
                  </label>
                </div>

                <p className="tiny muted pay-hint">
                  Tip: This is demo UI. Real payments should be handled by Stripe/PayPal on the backend.
                </p>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="payment-panel">
                <p className="muted">
                  You’ll be redirected to PayPal after clicking <b>Place Order</b> (demo).
                </p>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="payment-panel">
                <p className="muted">
                  Use bank transfer details after placing the order (demo):
                </p>
                <div className="bank-details">
                  <div><span>Account name</span><b>PowerNest Demo</b></div>
                  <div><span>Sort code</span><b>12-34-56</b></div>
                  <div><span>Account number</span><b>12345678</b></div>
                  <div><span>Reference</span><b>{form.lastName ? `PN-${form.lastName.toUpperCase()}` : "PN-YOURNAME"}</b></div>
                </div>
              </div>
            )}

            {paymentMethod === "cod" && (
              <div className="payment-panel">
                <p className="muted">
                  Pay with cash when your order is delivered (demo).
                </p>
              </div>
            )}
          </div>

          <button
            className="btn-primary place-btn"
            type="submit"
            disabled={cartEmpty || submitting}
            title={cartEmpty ? "Add items to cart first" : ""}
          >
            {submitting ? "Placing Order..." : `Place Order • £${total.toFixed(2)}`}
          </button>

          <p className="tiny muted">
            This is a demo checkout. Next step is connecting your backend.
          </p>
        </form>

        {/* RIGHT: SUMMARY */}
        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cartEmpty ? (
            <div className="summary-empty">
              <p>Your cart is empty.</p>
              <Link to="/" className="btn-secondary">
                Shop now
              </Link>
            </div>
          ) : (
            <>
              <div className="summary-items">
                {itemsInCart.map((p) => {
                  const img = p.main_image || p.images?.[0];
                  const unit = Number(p.new_price || 0);
                  const line = (p.qty * unit).toFixed(2);

                  return (
                    <div className="summary-item" key={p.id}>
                      <img
                        src={img}
                        alt={p.name}
                        className="summary-img"
                        loading="lazy"
                      />
                      <div className="summary-info">
                        <p className="summary-name">{p.name}</p>
                        <p className="summary-meta">
                          Qty: {p.qty} · £{unit.toFixed(2)}
                        </p>
                      </div>
                      <p className="summary-line">£{line}</p>
                    </div>
                  );
                })}
              </div>

              <div className="summary-totals">
                <div className="row">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="row">
                  <span>Shipping</span>
                  <span>£{shipping.toFixed(2)}</span>
                </div>
                <div className="row total">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="summary-payment">
                <span className="muted tiny">Payment method</span>
                <b>
                  {paymentMethod === "card"
                    ? "Card"
                    : paymentMethod === "paypal"
                    ? "PayPal"
                    : paymentMethod === "bank"
                    ? "Bank transfer"
                    : "Cash on delivery"}
                </b>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
