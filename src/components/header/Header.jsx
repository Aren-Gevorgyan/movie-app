import style from './Header.module.css';
import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return (

        <header>
           
           <div className={style.container}>
              <div className={style.logo}>
                <img src={logo} alt='logo'/>
              </div>
              <nav>
                <ul>
                  <li>Movies
                   <ul className={style.popular}>
                     <li>Popular</li>
                   </ul>
                  </li>
                </ul>
              </nav>
            </div>

        </header>
    )
}

  
export default Header;