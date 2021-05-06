import React from 'react';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import PopularContainer from '../popularContainer/PopularContainer.jsx';
import NavbarContainer from '../navbarContainer/NavbarContainer';
import Footer from '../footer/Footer';
import HeaderContainer from '../headerContainer/HeaderContainer';

const App = () => {

    return (

        <div className = {style.container}>
          <HeaderContainer/>
          <menu>
            <NavbarContainer />
            <Route path = '/'> <PopularContainer/> </Route> 
          </menu> 
          <Footer/>
        </div>
    )
}

export default App;