import React from "react";
import products from "./products";
const ProductItem = products.map((product, index) => {
  return (
    /*display Pictures and Names' products and Prices  */
    <div key={index} className="Product-Card">
      <img src={product.image} alt={product.name} className="Product-Image" />
      <h2>{product.name}</h2>
      <p>{product.price} KD</p>
    </div>
  );
});

export default ProductItem;
