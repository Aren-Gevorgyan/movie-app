import React from 'react';
import style from './Loading.module.css';
import loading from '../images/processing.gif';

const Loading = () => {
    return (
        <div className={style.container}>
            <img src={loading} alt="loading..."/>
        </div>
    )
}

export default Loading;