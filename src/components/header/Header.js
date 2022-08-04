import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logo-image" fontSize="large" />
          <h2 className="header__logo-title">e-shop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" fontSize="large" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__item-line-two">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__item-line-one">Your</span>
          <span className="nav__item-line-two">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item-basket">
            <ShoppingBasketIcon />
            <span className="nav__item-line-two nav__basket-count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
