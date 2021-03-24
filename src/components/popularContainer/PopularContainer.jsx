import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovie, setNewPagesNumber,
        setDisabledNext, setDisabledPrev, toDoLoading} from '../../store/reduce/popularMovieReduce';
import Loading from '../common/loading/Loading';

class PopularContainer extends React.Component{
      componentDidMount(){
         
         this.props.getPopularMovie(this.props.page);
      }
      
      render(){
          return this.props.loading? <Loading/> : <Popular {...this.props} />
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
        loading: state.popularMovie.loading,
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovie, setNewPagesNumber, setDisabledNext, setDisabledPrev, toDoLoading})
)(PopularContainer);