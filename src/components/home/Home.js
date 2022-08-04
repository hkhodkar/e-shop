import "./Home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={process.env.PUBLIC_URL + "/img/ecommerce.jpg"}
          alt="home"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={112233}
            title={
              "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            }
            img={process.env.PUBLIC_URL + "/img/products/bag.jpg"}
            price={199.99}
            rating={5}
          />
          <Product
            id="49538094"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            img={process.env.PUBLIC_URL + "/img/products/macro-wave.jpg"}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
            price={199.99}
            rating={3}
            img={process.env.PUBLIC_URL + "/img/products/macro-wave.jpg"}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            img={process.env.PUBLIC_URL + "/img/products/cannot-see.webp"}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            img={process.env.PUBLIC_URL + "/img/products/tablet.jpg"}
          />
        </div>
        <div className="home__row">
        <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        img={process.env.PUBLIC_URL + "/img/products/monitor.jpg"}
                    />
        </div>
      </div>
    </div>
  );
};

export default Home;
