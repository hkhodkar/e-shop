import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  return (
    <div className="checkout-product">
      <img src={process.env.PUBLIC_URL + "/img/products/bag.jpg"} alt="checkout-product" className="checkout-product__image" />
      <div className="checkout-product__info">
        <p className="checkout-product__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          adipisci? Consequatur assumenda quos, corrupti vel veritatis,
          laboriosam dolor voluptatum harum ex animi temporibus eius accusantium
          voluptate, quidem alias exercitationem illum!
        </p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>99.99</strong>
        </p>
        <div className="checkout-product__rating">⭐⭐</div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
