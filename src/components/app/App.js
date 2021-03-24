import React from 'react';
import HeaderContainer from '../headerContainer/HeaderContainer.jsx';
import { Route } from 'react-router-dom';
import PopularContainer from '../popularContainer/PopularContainer.jsx';

// const img_api = "https://image.tmdb.org/t/p/w1280";

const App = () => {

    return ( <
        div >
        <
        HeaderContainer / >
        <
        Route path = '/' > < PopularContainer / > < /Route> <
        /div>
    )
}


export default App;