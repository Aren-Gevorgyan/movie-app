import React from 'react';
import {compose} from 'redux';
import Popular from './popular/Popular';
import {connect} from 'react-redux';

class PopularContainer extends React.Component{
      componentDidMount(){

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
    connect(mapStateToProps)
)(PopularContainer);