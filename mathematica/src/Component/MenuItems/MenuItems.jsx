import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import './MenuItems.styles.scss'

import { useState } from "react";

const Menuitem = (props) => {

  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (

    <div className="Menu-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      {props.items.submenu.length > 0 ? (
        <>

          <span id="fix">{props.items.title}{''}</span>
          <div className="new" >
          {dropdown ? (
            <>
              {props.items.submenu.map((item) => {
                return (
                  <Dropdown item={item} />
                )
              })} </>) :
            null}
          </div>
        </>
      ) : (
        <a href={props.items.url} className='menu-itemChild'>{props.items.title}</a>
      )}

    </div>
  );
};

export default Menuitem;