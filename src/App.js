import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";  // Import CartProvider
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";  // Assuming you added this

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>  {/* Wrap the app with CartProvider */}
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details page */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
