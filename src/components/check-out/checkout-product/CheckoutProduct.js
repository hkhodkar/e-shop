import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  return (
    <div className="checkout-product">
      <img
        src={props.src}
        alt="checkout-product"
        className="checkout-product__image"
      />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{props.title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
