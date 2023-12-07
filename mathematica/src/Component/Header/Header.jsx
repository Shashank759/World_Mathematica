import React from "react";
//import {useState} from 'react'
import "./Header.styles.scss";
import BarButton from "../BarButton/Barbutton";
import Dropdown from "../Dropdown/Dropdown";

 class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [
        {
          Name: "PlayList",
        },
      ],
    };
  }
  

  render() {
    return (
      <div className="header">
        <div className="options">
           <div className="option" onMouseEnter={()=>{<Dropdown/>}}>
        
          PlayList</div>
          <div className="option">Notes</div>
          <div className="option">Previous Year Paper</div>
          <div className="option">Exams</div>
          <div className="option">Mock Test</div>
        </div>
      </div>
    );
  }
}

export default Header;
