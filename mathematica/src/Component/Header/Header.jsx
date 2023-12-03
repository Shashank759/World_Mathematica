import React from 'react';
import './Header.styles.scss'


const Header=()=>{
    return(
    
           <div className = "header">
             <div className='options'>
                <div className = "option">
                    Playlist
                </div>
                <div className = "option">
                    Notes
                </div>
                <div className = "option">
                    Previous Year Paper
                </div>
                <div className = "option" >
                   Exams
                </div>
                <div className='option'>Mock Test</div>
            </div></div>

    )
}

export default Header;