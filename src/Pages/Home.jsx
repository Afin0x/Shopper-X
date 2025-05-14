import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../Components/ProductItem";
import "../Styles/Home.css";

function Home({ searchQuery }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Error loading products", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
