import React from "react";
import './Dropdown.styles.scss'
const Dropdown = ({item} ) => {
  console.log(item)
  return (

        <li className="submenu">
          <a href={item.url}>{item.title}</a>
        </li>
  );
};

export default Dropdown;