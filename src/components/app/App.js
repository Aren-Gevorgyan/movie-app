import React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer.jsx';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import PopularContainer from '../popularContainer/PopularContainer.jsx';
import Navbar from '../navbar/Navbar';

const App = () => {

    return (

        <
        div className = { style.container } >
        <
        HeaderContainer / >
        <
        div >
        <
        Navbar / >
        <
        Route path = '/' > < PopularContainer / > < /Route>  <
        /div> <
        /div>
    )
}


export default App;