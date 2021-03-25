import style from './Header.module.css';
import React from 'react';
import logo from '../../../assets/images/logo.png';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    
    const menuItem = props.menu.map(menu => {
        return <NavLink key={menu.id} to={`/${menu.path}`}><li>{menu.name}</li></NavLink>
    })

    return (

        <header>
           
           <div className={style.container}>
              <div className={style.logo}>
                <img src={logo} alt='logo'/>
              </div>

              <div className={style.menu}>
                <ul>
                    {menuItem}
                </ul>
              </div>
            </div>

        </header>
    )
}

  
export default Header;