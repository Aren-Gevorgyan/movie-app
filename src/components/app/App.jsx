import React from 'react';
import { Route } from 'react-router-dom';
import style from './App.module.css';
import PopularContainer from '../popularContainer/PopularContainer.jsx';
import NavbarContainer from '../navbarContainer/NavbarContainer.jsx';
import Footer from '../footer/Footer.jsx';
import HeaderContainer from '../headerContainer/HeaderContainer.jsx';

const App = () => {

  return (

    <div className={style.container}>
      <HeaderContainer />
      <menu>
        <NavbarContainer />
        <Route path='/'> <PopularContainer /> </Route>
      </menu>
      <Footer />
    </div>
  )
}

export default App;