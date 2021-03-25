import style from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    
    const menuItem = props.menu.map(menu => {
        return <NavLink key={menu.id} to={`/${menu.path}`} className={style.menuItem } activeClassName={style.active}>
                       <li>{menu.name}</li>
               </NavLink>
    })

    return (

        <aside>
            <h2>Popular Movies</h2>
            <div className={style.menu}>
                <ul>
                    {menuItem}
                </ul>
            </div>
        </aside>

    )
}
  
export default Navbar;