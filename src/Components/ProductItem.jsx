import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../Styles/Productitem.css";

function ProductItem({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>₹{product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
