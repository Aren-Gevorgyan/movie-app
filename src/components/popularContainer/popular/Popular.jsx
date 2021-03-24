import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';

const Popular = (props) => {

    const movieItems = props.popularMovie.map(movie => {
        return <MovieItems key={movie.id} poster={movie.poster_path}/> 
    })

    return (
        <div className={style.container}>
            {movieItems}
        </div>
    )
}
  
export default Popular;