import style from './Header.module.css';
import React from 'react';
import logo from '../../assets/images/logo.png';

const Header = (props) => {
    
    return (

        <header>
           
           <div className={style.container}>
              <div className={style.logo}>
                <img src={logo} alt='logo'/>
              </div>
            </div>

        </header>
    )
}

  
export default Header;