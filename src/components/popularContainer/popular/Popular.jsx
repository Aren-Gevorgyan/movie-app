import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../assets/loading/Loading';

const Popular = ({popularMovie, getPopularMovie, page, loading}) => {
    let movieItems = arrayMovies(popularMovie);
    
    return (
            <div className={style.container}>
                   <InfiniteScroll
                      className={style.movie}
                      dataLength={popularMovie.length}
                      next={()=>getPopularMovie(page)}
                      hasMore={true}>  
                           {movieItems}
                           {loading? <Loading/>: ""}
                   </InfiniteScroll>
            </div>
    )  
}

function arrayMovies(popularMovie){
    return popularMovie.map(movie => {
        return <MovieItems key={movie.id} 
                        title={movie.original_title}
                        date={movie.release_date}
                        poster={movie.poster_path}
                        voteAverage={movie.vote_average}/> 
    })
}

export default Popular;
