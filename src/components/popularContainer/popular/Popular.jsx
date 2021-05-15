import style from './Popular.module.css';
import React, {useRef, useEffect} from 'react';
import MovieItems from './movieItems/MovieItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../assets/loading/Loading';
import NotResult from './notResult/NotResult';
import {TYPE_POPULAR, TYPE_BY_YEAR} from '../../../store/reduce/popularMovieReduce';

const Popular = ({popularMovies, ...props}) => {

    const getContainerElement = useRef(null);
    const ifNotMovies = popularMovies.length === 0;

    useEffect(()=>{
        const setPaddingContainer = ifNotMovies? "230px" : "0px";
        getContainerElement.current.style.paddingBottom = setPaddingContainer;
    }, [ifNotMovies]);

    const movieItems = arrayMovies(popularMovies);
    
    //by movie type return function
    const getNewMovies = newMoviesType(props.moviesType, props.getPopularMovies,
         props.getNewMoviesByYear);
    
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
                      dataLength={popularMovies.length}
                      next={()=> getNewMovies(props.page, props.dateFrom, props.dateTo)}
                      hasMore={true}>  
                           {movieItems}
                           {props.loading? <Loading/>: ""}
                </InfiniteScroll>
            }
        </div>
    )
}

function newMoviesType(type, getPopularMovies, getNewMoviesByYear){
    switch(type){
        case TYPE_POPULAR:
            return getPopularMovies;
        case TYPE_BY_YEAR:
            return getNewMoviesByYear;  
        default:
            break;       
    };
}

function arrayMovies(popularMovies){
    return popularMovies.map(movie => {
        return <MovieItems key={movie.id} 
                        title={movie.original_title}
                        date={movie.release_date}
                        poster={movie.poster_path}
                        voteAverage={movie.vote_average}/> 
    })
}

export default Popular;
