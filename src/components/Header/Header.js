import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <NavLink to="/home" activeClassName="selected" className="nav__item">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="selected" className="nav__item">
        About
      </NavLink>
      <NavLink to="/product" activeClassName="selected" className="nav__item">
        Products
      </NavLink>
      <NavLink to="/contact" activeClassName="selected" className="nav__item">
        Contact
      </NavLink>
      <NavLink to="/404" activeClassName="selected" className="nav__item">
        404
      </NavLink>
    </nav>
  );
};

export default Header;
