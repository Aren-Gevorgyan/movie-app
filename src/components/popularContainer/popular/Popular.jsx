import style from './Popular.module.css';
import React, {useRef, useEffect} from 'react';
import MovieItems from './movieItems/MovieItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../assets/loading/Loading';
import NotResult from './notResult/NotResult';
import {TYPE_POPULAR, TYPE_ByYEAR} from '../../../store/reduce/popularMovieReduce';

const Popular = ({popularMovie, ...props}) => {

    const getContainerElement = useRef(null);
    const ifNotMovies = popularMovie.length === 0;
    const setPaddingContainer = ifNotMovies? "230px" : "0px";

    useEffect(()=>{
        getContainerElement.current.style.paddingBottom = setPaddingContainer;
    }, [ifNotMovies]);

    const movieItems = arrayMovies(popularMovie);
    
    //by movie type return function
    const getNewMovie = newMovieType(props.movieType, props.getPopularMovie,
         props.getNewMovieByYear);
    
    return (
        
        <div ref={getContainerElement} className={style.container}>
            {ifNotMovies?
              <NotResult getContainerElement={getContainerElement} ifNotMovies={ifNotMovies}/>
              :
              props.loadMore?
                <>
                  <div className={style.movie}>{movieItems}</div>
                  <button onClick={()=>props.setLoadMore(!props.loadMore)}
                        className={style.loadMore}> Load More
                  </button>
                </> 
                :
                <InfiniteScroll
                      className={style.movie}             
                      dataLength={popularMovie.length}
                      next={()=> getNewMovie(props.page, props.dateFrom, props.dateTo)}
                      hasMore={true}>  
                           {movieItems}
                           {props.loading? <Loading/>: ""}
                </InfiniteScroll>
            }
        </div>
    )
}

function newMovieType(type, getPopularMovie, getNewMovieByYear){
    switch(type){
        case TYPE_POPULAR:
            return getPopularMovie;
        case TYPE_ByYEAR:
            return getNewMovieByYear;  
        default:
            break;       
    };
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
