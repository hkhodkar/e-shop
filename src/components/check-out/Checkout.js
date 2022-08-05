import React from "react";
import CheckoutProduct from "./checkout-product/CheckoutProduct";
import "./Checkout.css";
import SubTotal from "./subtotal/SubTotal";

const Checkout = (props) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={process.env.PUBLIC_URL + "/img/checkout/checkout-add.jpg"}
          alt="checkout-add"
          className="checkout__add"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
