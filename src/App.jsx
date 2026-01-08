import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Category from "./Components/Category/Category";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";
import Checkout from "./Components/Checkout/Checkout";

import Shipping from "./Components/Shipping/Shipping";
import Returns from "./Components/Returns/Returns";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/FAQ";

import About from "./Components/About/About";
import Careers from "./Components/Careers/Careers";
import Register from "./Components/Register/Register";



const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:category" element={<Category />} />

          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/register" element={<Register />} />


         
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
