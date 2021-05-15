import style from './Header.module.css';
import React from 'react';
import logo from '../../../assets/images/logo.png';

const Header = ({getInitialMovies}) => {
    
    const getPopularMovie = () => {
        window.scrollTo( 0, 0);
        getInitialMovies()
    }

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
                     <li onClick={getPopularMovie}>Popular</li>
                   </ul>
                  </li>
                </ul>
              </nav>
            </div>

        </header>
    )
}

  
export default Header;