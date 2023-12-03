import React from 'react';
import "./HomePage.styles.scss";
import Header from '../../Component/Header/Header'
import Intro from '../../Component/Intro/Intro';
import Logo from '../../Component/Logo/Logo'
const HomePage =()=>{
    return(
        <div className="homePage">
        <Logo/>
        <Header/>
        <Intro/>
        </div>
    )
 
};
export default HomePage;