import React from "react";
import ProductList from "./ProductList";
const ProductItem = ProductList.map((ProductList, index) => {
  return (
    /*display Pictures, Names' products and Prices  */
    <div key={index} className="Product-Card">
      <img
        src={ProductList.image}
        alt={ProductList.name}
        className="Product-Image"
      />
      <h2>{ProductList.name}</h2>
      <p>{ProductList.price} KD</p>
    </div>
  );
});

export default ProductItem;
