import React from "react";
//import {useState} from 'react'
import "./Header.styles.scss";
import MenuItems from "../MenuItems/MenuItems";


 class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [
          {
              title: "PlayList",
              submenu: [{
                  url: "Test",
                  title: "Subject"
              }]
          }
      ]
  }
  }
  

  render() {
    return (
      <div className="header">
        <div className="options">
           <div className="option" >
                <MenuItems items={this.state.item}/>
          </div>
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
