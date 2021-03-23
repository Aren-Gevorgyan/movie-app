import React from 'react';
import {compose} from 'redux';
import Header from './header/Header';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component{
      render(){
          return <Header {...this.props}/>
      }
}

const mapStateToProps = (state) => {
    return {
        menu: state.header.menu,
    }
}

export default compose(
    connect(mapStateToProps)
)(HeaderContainer);