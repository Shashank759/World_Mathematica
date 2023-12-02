import React from 'react';
import {ReactComponent as Logo} from '../../Assest/Channel_logo.svg';
import {Link} from 'react-router-dom';
import './Header.styles.scss'

const Header=()=>{
    return(
        <div className='header'>
            <Link className = "logo-container" to = '/'>
                <Logo className='logo'/>
            </Link>
            <div className = "options">
                <Link className = "option" to ='/shop'>
                    Home
                </Link>
                <Link className = "option" to ='/shop'>
                    Notes
                </Link>
                <Link className = "option" to ='/shop'>
                    Previous Year Paper
                </Link>
                <Link className = "option" to ='/shop'>
                   About Us
                </Link>
            </div>
        </div>
    )
}

export default Header;