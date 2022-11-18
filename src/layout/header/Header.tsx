import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();

  const search = (e: any) => {
    if (e.key === "Enter") {
      navigate("/", { state: { searchValue } });
    }
  };

  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <img
          src={require("../../assets/logo/trox.png")}
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input
          type="text"
          defaultValue={searchValue}
          className="header__searchInput"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={search}
        />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello, User</span>
            <span className="header__optionTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/support" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Help</span>
            <span className="header__optionTwo">& Support</span>
          </div>
        </Link>
        <Link to="/listing" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Sell on</span>
            <span className="header__optionTwo">Trox</span>
          </div>
        </Link>
      </div>
      <Link to="/cart" className="header__link">
        <div className="header__optionCart">
        <span className="header__optionOne"></span>
            <span className="header__optionTwo">Cart</span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
