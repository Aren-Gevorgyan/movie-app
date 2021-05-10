import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovie, setLoadMore} from '../../store/reduce/popularMovieReduce';
import {getMovieItems, getPage, getLoading, getLoadMore} from '../../store/reduce/popularMovieSelector';

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
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovie, setLoadMore})
)(PopularContainer);