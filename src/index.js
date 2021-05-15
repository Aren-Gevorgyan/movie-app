import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import './index.css';
import App from './components/app/App.jsx';


ReactDOM.render(

    <
    React.StrictMode >
    <
    BrowserRouter >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>     <
    /BrowserRouter >  <
    /React.StrictMode >,
    document.getElementById('root'),

);

reportWebVitals();