import React from 'react';
import {compose} from 'redux';
import Navbar from './navbar/Navbar';
import {connect} from 'react-redux';

class NavbarContainer extends React.Component{
      render(){
          return <Navbar {...this.props}/>
      }
}

const mapStateToProps = (state) => {
    return {
        menu: state.navbar.menu,
    }
}

export default compose(
    connect(mapStateToProps)
)(NavbarContainer);