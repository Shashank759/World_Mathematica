import React from 'react';
import {Link} from 'react-router-dom';
import './Header.styles.scss'


const Header=()=>{
    return(
        <div className='header'>
           <div className = "options">
                <Link className = "option" to ='/shop'>
                    Playlist
                </Link>
                <Link className = "option" to ='/shop'>
                    Notes
                </Link>
                <Link className = "option" to ='/shop'>
                    Previous Year Paper
                </Link>
                <Link className = "option" to ='/shop'>
                   Exams
                </Link>
                <Link className='option'>Mock Test</Link>
            </div>
        </div>
    )
}

export default Header;