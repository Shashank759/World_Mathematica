import React from "react";
import './Dropdown.styles.scss'
const Dropdown = ({item} ) => {

  return (

        <div className="submenu">
          <a href={item.url}>{item.title}</a>
        </div>
  );
};

export default Dropdown;