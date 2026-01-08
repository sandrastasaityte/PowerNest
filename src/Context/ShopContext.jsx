import React, { createContext, useEffect, useMemo, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const CART_STORAGE_KEY = "powernest_cart_v1";

const buildDefaultCart = (products) => {
  const cart = {};
  for (const p of products) cart[String(p.id)] = 0;
  return cart;
};

const loadCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
};

const normalizeCart = (products, savedCart) => {
  const base = buildDefaultCart(products);

  // keep only known ids, ensure integers >= 0
  for (const id in base) {
    const qty = Number(savedCart?.[id] ?? 0);
    base[id] = Number.isFinite(qty) ? Math.max(0, Math.floor(qty)) : 0;
  }

  return base;
};

const clampToStock = (products, id, qty) => {
  const key = String(id);
  const p = products.find((x) => String(x.id) === key);
  const stock = Number(p?.stock ?? Infinity);

  if (!Number.isFinite(stock)) return Math.max(0, qty);
  return Math.max(0, Math.min(qty, Math.max(0, Math.floor(stock))));
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() =>
    normalizeCart(all_product, loadCart())
  );

  // ✅ If products list changes (new items added), keep cart valid
  useEffect(() => {
    setCartItems((prev) => normalizeCart(all_product, prev));
  }, []);

  // persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore storage quota / private mode errors
    }
  }, [cartItems]);

  const setQty = (id, qty) => {
    const key = String(id);
    const next = clampToStock(all_product, key, Math.floor(Number(qty) || 0));
    setCartItems((prev) => ({ ...prev, [key]: next }));
  };

  const addToCart = (id, qty = 1) => {
    const key = String(id);
    const addQty = Math.max(1, Math.floor(Number(qty) || 1));

    setCartItems((prev) => {
      const current = Number(prev[key] || 0);
      const next = clampToStock(all_product, key, current + addQty);
      return { ...prev, [key]: next };
    });
  };

  const removeFromCart = (id) => {
    const key = String(id);
    setCartItems((prev) => ({ ...prev, [key]: 0 }));
  };

  const clearCart = () => {
    setCartItems(buildDefaultCart(all_product));
  };

  const increaseQty = (id) => addToCart(id, 1);

  const decreaseQty = (id) => {
    const key = String(id);
    setCartItems((prev) => {
      const current = Number(prev[key] || 0);
      return { ...prev, [key]: Math.max(0, current - 1) };
    });
  };

  const getItemQty = (id) => Number(cartItems[String(id)] || 0);

  const getCartCount = () => {
    let total = 0;
    for (const key in cartItems) total += Number(cartItems[key] || 0);
    return total;
  };

  const getLineTotal = (id) => {
    const key = String(id);
    const p = all_product.find((x) => String(x.id) === key);
    const qty = Number(cartItems[key] || 0);
    const price = Number(p?.new_price || 0);
    return Number((qty * price).toFixed(2));
  };

  const getCartTotal = () => {
    let total = 0;
    for (const p of all_product) {
      const qty = Number(cartItems[String(p.id)] || 0);
      if (qty > 0) total += qty * Number(p.new_price || 0);
    }
    return Number(total.toFixed(2));
  };

  const value = useMemo(
    () => ({
      all_product,
      cartItems,

      addToCart,
      removeFromCart,
      clearCart,
      increaseQty,
      decreaseQty,
      setQty,

      getItemQty,
      getCartCount,
      getLineTotal,
      getCartTotal,
    }),
    [cartItems]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
