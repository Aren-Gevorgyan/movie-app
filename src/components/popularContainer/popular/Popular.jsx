import style from './Popular.module.css';
import React from 'react';

const img_api = "https://image.tmdb.org/t/p/w500"

const Popular = (props) => {
    const movieItems = props.popularMovie.map(movie => {
        return <img src={img_api + movie.poster_path} alt='moviePhoto'/>
    })
    return (
        <div className={style.container}>
            {movieItems}
        </div>
    )
}
  
export default Popular;