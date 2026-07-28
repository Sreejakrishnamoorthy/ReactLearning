import React, { useState } from "react";
import ProductItem from "./ProductItem";

function Shop() {
  const [product, setProduct] = useState({
    name: "iphone17",
    price: 100000,
    description: "8GB RAM with 128GB"
  });
  return (
    <div>
      <h1>welcome to my Shop</h1>
      <ProductItem product={product}/>
    </div>
  );
}

export default Shop;
