import React from 'react';
import style from './Navbar.module.css';
import Filter from './filter/Filter.jsx';

const Navbar = ({ watchMoviesByYear, page, genresItem }) => {

    return (

        <aside>
            <h2>Popular Movies</h2>
            <div className={style.menu}>
                <ul>
                    <Filter watchMoviesByYear={watchMoviesByYear} page={page}
                        genresItem={genresItem} />
                </ul>
            </div>
        </aside>

    )
}

export default Navbar;