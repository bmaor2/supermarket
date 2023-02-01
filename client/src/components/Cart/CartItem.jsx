import React from "react";
import { useState } from "react";

export const CartItem = (props) => {
  const { product_id, product_name, price, img_url , quantity } = props.product;

  return (
    <div className="cart_product">
      <p>{product_name}</p>
      <div>
        <img src={`http://localhost:8000/product/img?imgUrl=${img_url}`} alt={product_name} />
        <label>
          Quantity:
          {quantity}
        </label>
        <p onClick={() => props.removeItem(product_id)}>remove item</p>
      </div>
      <p>{price} ₪</p>
    </div>
  );
};