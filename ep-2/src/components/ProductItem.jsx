import React from "react";
import ProductDetails from "./ProductDetails";

function ProductItem({ product }) {
//   console.log(product);
  return (
    <div>
      <h1>displaying product items</h1>
      {/* <section>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </section> */}
      <ProductDetails pro={product}/>
    </div>
  );
  
}

export default ProductItem;
