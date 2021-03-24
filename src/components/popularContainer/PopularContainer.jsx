import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovie, setNewPagesNumber,
        setDisabledNext, setDisabledPrev} from '../../store/reduce/popularMovieReduce';

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
        popularMovie: state.popularMovie.movieItems,
        currentPage: state.popularMovie.currentPage,
        page: state.popularMovie.page,
        totalPages: state.popularMovie.totalPages,
        nextButtonDisabled: state.popularMovie.nextButtonDisabled,
        prevButtonDisabled: state.popularMovie.prevButtonDisabled,
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovie, setNewPagesNumber, setDisabledNext, setDisabledPrev})
)(PopularContainer);