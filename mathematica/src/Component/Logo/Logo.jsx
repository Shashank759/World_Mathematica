import React from "react";
import { ReactComponent as Head } from "../../Assest/Channel_logo.svg";
import "./Logo.styles.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="container">
        <Head className="logo"/>
        <p> World Mathematica</p>
      </div>

      <div className="container" id='aboutMe'>
        <p>About Me</p>
      </div>
    </div>
  );
};
export default Logo;
