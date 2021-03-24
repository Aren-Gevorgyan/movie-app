import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';
import {getPopularMovieThunk} from '../../store/reduce/popularMovieReduce';

class PopularContainer extends React.Component{
      componentDidMount(){
         this.props.getPopularMovieThunk();
      }
      
      render(){
          return <Popular {...this.props}/>
      }
}

const mapStateToProps = (state) => {
    return {
        popularMovie: state.popularMovie.movieItems,
    }
}

export default compose(
    connect(mapStateToProps, {getPopularMovieThunk})
)(PopularContainer);