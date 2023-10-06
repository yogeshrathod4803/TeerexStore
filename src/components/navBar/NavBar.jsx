import React from "react";
import Style from "../navBar/NavBar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <Link to="/" className={Style.brandName}>
          TeerexStore
        </Link>
      </div>
      <SearchBar />
      <div className={Style.menu}>
        <Link to="/" className={Style.products}>
          Products
        </Link>
        <Link to="/checkout" className={Style.CheckOutBag}>
          <div className={Style.iconContainer}>
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
