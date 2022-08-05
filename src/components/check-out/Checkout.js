import React from "react";

import "./Checkout.css";
import SubTotal from "./subtotal/SubTotal";
import CheckoutProduct from "./checkout-product/CheckoutProduct";
import { useStateValue } from "../../providers/StateProvider";
const Checkout = (props) => {
  const [{ basket }, action] = useStateValue();
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
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              src={item.imgageSrc}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;

