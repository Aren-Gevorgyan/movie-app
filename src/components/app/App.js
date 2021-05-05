import React from 'react';
import Header from '../header/Header';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import PopularContainer from '../popularContainer/PopularContainer.jsx';
import NavbarContainer from '../navbarContainer/NavbarContainer';
import Footer from '../footer/Footer';

const App = () => {

    return (

        <
        div id = { 'demo' }
        className = { style.container } >
        <
        Header / >
        <
        menu >
        <
        NavbarContainer / >
        <
        Route path = '/' > < PopularContainer / > < /Route> < /
        menu > <
        Footer / >
        <
        /div>
    )
}

export default App;