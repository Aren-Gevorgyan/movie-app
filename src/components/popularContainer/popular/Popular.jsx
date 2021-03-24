import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';

const Popular = (props) => {

    const movieItems = props.popularMovie.map(movie => {
        return <MovieItems key={movie.id} 
                           title={movie.original_title}
                           date={movie.release_date}
                           poster={movie.poster_path}
                           voteAverage={movie.vote_average}/> 
    })

    return (
        <div className={style.container}>
            {movieItems}
        </div>
    )
}
  
export default Popular;