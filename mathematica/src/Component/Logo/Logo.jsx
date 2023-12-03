import React from 'react';
import {ReactComponent as Head} from '../../Assest/Channel_logo.svg';
import './Logo.styles.scss';

const Logo=()=>{
    return(
        <div className='logo-container'>
           <div className="container" ><Head className='logo' alt='World Mathematica' /><p> World Mathematica</p></div>

            <div className='container' ><p className='contain'>About Me</p></div>
        </div>
        )
                }
                export default Logo;