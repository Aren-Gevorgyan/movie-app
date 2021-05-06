import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../assets/loading/Loading';

const Popular = (props) => {
    let movieItems = arrayMovies(props.popularMovie);
    
    return (
            <div className={style.container}>
                {props.loadMore?
                <>
                  <div className={style.movie}>{movieItems}</div>
                  <button onClick={()=>props.setLoadMore(!props.loadMore)}
                        className={style.loadMore}> Load More
                   </button>
                </> 
                :
                <InfiniteScroll
                      className={style.movie}             
                      dataLength={props.popularMovie.length}
                      next={()=>props.getPopularMovie(props.page)}
                      hasMore={true}>  
                           {movieItems}
                           {props.loading? <Loading/>: ""}
                </InfiniteScroll>
                }
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
