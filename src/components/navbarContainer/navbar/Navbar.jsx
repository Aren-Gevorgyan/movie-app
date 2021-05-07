import React from 'react';
import style from './Navbar.module.css';
import Filter from './filter/Filter';

const Navbar = (props) => {

    return (

        <aside>
              <h2>Popular Movies</h2>
              <div className={style.menu}>
                 <ul>
                    <Filter/>
                 </ul>
              </div>
        </aside>

    )
}
  
export default Navbar;