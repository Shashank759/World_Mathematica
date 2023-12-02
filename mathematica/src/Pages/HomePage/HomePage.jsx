import React from 'react';
import "./HomPage.styles.scss";
import Header from '../../Component/Header/Header'
import Intro from '../../Component/Intro/Intro';

const HomePage =()=>{
    return(
        <div className="homePage">
        <Header/>
        <Intro/>
        </div>
    )
 
};
export default HomePage;