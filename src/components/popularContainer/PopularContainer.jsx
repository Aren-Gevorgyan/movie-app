import React, {useEffect} from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovies, setLoadMore,
      getNewMoviesByYear} from '../../store/reduce/popularMovieReduce';
import {getMovieItems, getPage, getLoading,
        getLoadMore, getMoviesType, getDateFrom,
        getDateTo} from '../../store/reduce/popularMovieSelector';

const PopularContainer = (props) => {

    useEffect(()=>{
        props.getPopularMovies(props.page);
    },[]);
    
    return <Popular {...props} />   
}

const mapStateToProps = (state) => {
    return {
        popularMovies: getMovieItems(state),
        page: getPage(state),
        loading: getLoading(state),
        loadMore: getLoadMore(state),
        moviesType: getMoviesType(state),
        dateFrom: getDateFrom(state),
        dateTo: getDateTo(state),
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovies, setLoadMore, getNewMoviesByYear})
)(PopularContainer);