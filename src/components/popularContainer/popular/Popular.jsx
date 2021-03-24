import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';
import Paginator from './paginator/Paginator';

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
            <Paginator 
                    totalPages={props.totalPages}
                    currentPage={props.currentPage}
                    page={props.page}
                    countMovie={props.popularMovie.length}
                    setNewPagesNumber={props.setNewPagesNumber}
                    nextButtonDisabled={props.nextButtonDisabled}
                    prevButtonDisabled={props.prevButtonDisabled}
                    setDisabledNext={props.setDisabledNext}
                    setDisabledPrev={props.setDisabledPrev}
                    getPopularMovie={props.getPopularMovie}
                    toDoLoading={props.toDoLoading}/>

            <div className={style.movie}>
               {movieItems}
            </div>
        </div>
    )
}
  
export default Popular;