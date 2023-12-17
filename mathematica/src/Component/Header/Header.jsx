import React from "react";
import "./Header.styles.scss";
import MenuItems from "../MenuItems/MenuItems";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      item: [
        
          {title: "PlayList",
          id: 1,
          submenu: [
            {
              id: 1,
              url: "Test",
              title: "Subject",
            },
            {
              id: 2,
              url: "Test",
              title: "Subject",
            },{
              id: 3,
              url: "Test",
              title: "Subject",
            },
            {
              id: 4,
              url: "Test",
              title: "Subject",
            },{
              id: 5,
              url: "Test",
              title: "Subject",
            },
            {
              id: 6,
              url: "Test",
              title: "Subject",
            },
          ],
        },
          {title: "Notes",
          id: 2,
          submenu: [
            {
              id: 1,
              url: "Test",
              title: "Subject",
            },
            {
              id: 2,
              url: "Test",
              title: "Subject",
            },
          ],},
          {title: "Previous Paper",
          id: 3,
          submenu: [
            {
              id: 1,
              url: "Test",
              title: "Subject",
            },
            {
              id: 2,
              url: "Test",
              title: "Subject",
            },
          ],},
         { title: "Exams",
          id: 4,
          submenu: [
            {
              id: 1,
              url: "Test",
              title: "Subject",
            },
            {
              id: 2,
              url: "Test",
              title: "Subject",
            },
          ],}
        
      ],
    };
  }

  render() {
    return (
      <div className="header">
        <div className='options'>
          {this.state.item.map((props)=>{
           return( <MenuItems items={props} />)
})}
  </div></div>
    );
  }
}

export default Header;
