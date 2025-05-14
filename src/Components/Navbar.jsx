import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import ProductList from "./ProductList";
import "../Styles/Navbar.css";

function Navbar({ setSearchQuery }) {
  const { cartItems } = useCart();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getCartItemCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (query.trim()) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products || []);
          setShowResults(true);
        });
    } else {
      setShowResults(false);
    }

    setSearchQuery(query);
  }, [query, setSearchQuery]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopperX
      </Link>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />

        {showResults && products.length > 0 && (
          <div className="search-dropdown">
            <ProductList products={products.slice(0, 5)} />
          </div>
        )}
      </div>

      <Link to="/cart" className="cart-link">
        🛒 {getCartItemCount()}
      </Link>
    </nav>
  );
}

export default Navbar;
