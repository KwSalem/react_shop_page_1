import React from "react";

const ProductItem = (props) => {
  return (
    <div className="Product-Card">
      <img
        src={props.myItem.image}
        alt={props.myItem.name}
        className="Product-Image"
      />
      <h2>{props.myItem.name}</h2>
      <p>{props.myItem.price} KD</p>
    </div>
  );
};

export default ProductItem;
