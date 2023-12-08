import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import './MenuItems.styles.scss';
import { useState } from "react";

const MenuItems = ({ items }) => {

  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
   };
    
    return (
      
      <li className="menu-items">
 
        {items[0].submenu ? (
          <>
            <button type="button" aria-haspopup="menu" className='menu-items' onMouseEnter={onMouseEnter}>
              {items[0].title}{' '}
            </button>
            <Dropdown submenus={items[0].submenu} className='menu-itemChild'  />
          </>
        ) : (
          <a href={items[0].url } className='menu-itemChild'>{items[0].title}</a>
        )}
      </li>
    );
  };
  
  export default MenuItems;