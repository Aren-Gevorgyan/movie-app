import React, {useEffect} from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovie, setLoadMore,
      getNewMovieByYear} from '../../store/reduce/popularMovieReduce';
import {getMovieItems, getPage, getLoading,
        getLoadMore, getMovieType, getDateFrom,
        getDateTo} from '../../store/reduce/popularMovieSelector';

const PopularContainer = (props) => {

    useEffect(()=>{
        props.getPopularMovie(props.page);
    },[]);
    
    return <Popular {...props} />   
}

const mapStateToProps = (state) => {
    return {
        popularMovie: getMovieItems(state),
        page: getPage(state),
        loading: getLoading(state),
        loadMore: getLoadMore(state),
        movieType: getMovieType(state),
        dateFrom: getDateFrom(state),
        dateTo: getDateTo(state),
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovie, setLoadMore, getNewMovieByYear})
)(PopularContainer);