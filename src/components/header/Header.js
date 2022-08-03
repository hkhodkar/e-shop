import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logo-image" fontSize="large" />
        <h2 className="header__logo-title">e-shop</h2>
      </div>

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
        <div className="nav__item-basket">
          <ShoppingBasketIcon />
          <span className="nav__item-line-two nav__basket-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
