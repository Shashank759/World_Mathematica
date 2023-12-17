import React from "react";
import "./Header.styles.scss";
import MenuItems from "../MenuItems/MenuItems";
import navItems from './Header.data.js';

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        {navItems.map((props) => {
          return(<MenuItems items={props} />)
        })}
      </div>
    </div>
  );
};

export default Header;
