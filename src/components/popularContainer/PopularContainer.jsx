import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovie, setLoadMore,
      getNewMovieByYear} from '../../store/reduce/popularMovieReduce';
import {getMovieItems, getPage, getLoading,
        getLoadMore, getMovieType, getDateFrom,
        getDateTo} from '../../store/reduce/popularMovieSelector';

class PopularContainer extends React.Component{    
    componentDidMount(){
        this.props.getPopularMovie(this.props.page);
    }
    
    render(){
        return <Popular {...this.props} />
    }
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