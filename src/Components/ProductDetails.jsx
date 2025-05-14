import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import "../Styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-card">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p className="product-price">₹ {product.price}</p>
          <p className="product-rating">{product.rating} ⭐</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
