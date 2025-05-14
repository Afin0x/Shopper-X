import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list-dropdown">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="dropdown-product-card"
        >
          <img src={product.thumbnail} alt={product.title} />
          <div className="info">
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
