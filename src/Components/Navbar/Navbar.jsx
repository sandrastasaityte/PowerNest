import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Navbar.css";
import cart_logo from "../../assets/cart_logo.png";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const count = Number(getCartCount?.() || 0);

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            PowerNest
          </NavLink>
        </div>

        {/* LINKS */}
        <ul className={`navbar-links ${open ? "open" : ""}`}>
          <li><NavLink to="/category/speaker" onClick={closeMenu}>Speakers</NavLink></li>
          <li><NavLink to="/category/headphones" onClick={closeMenu}>Headphones</NavLink></li>
          <li><NavLink to="/category/webcam" onClick={closeMenu}>Webcams</NavLink></li>
          <li><NavLink to="/category/usb_hub" onClick={closeMenu}>USB Hubs</NavLink></li>
          <li><NavLink to="/category/usb_switch" onClick={closeMenu}>USB Switches</NavLink></li>
          <li><NavLink to="/category/gaming_pc" onClick={closeMenu}>Gaming PCs</NavLink></li>
          <li><NavLink to="/category/3d_printer" onClick={closeMenu}>3D Printers</NavLink></li>
        </ul>

        {/* ACTIONS */}
        <div className="navbar-actions">
          <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
            <img className="cart-icon" src={cart_logo} alt="Cart" />
            <span>Cart</span>
            {count > 0 ? <span className="cart-count">{count}</span> : null}
          </NavLink>

          <NavLink to="/login" className="login-link" onClick={closeMenu}>
            Login
          </NavLink>

          {/* MOBILE TOGGLE */}
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
