import React from 'react';
import style from './Loading.module.css';
import loading from '../../../assets/images/loader.gif';

const Loading = () => {
    return (
        <div className={style.container}>
            <img src={loading} alt="loading gif"/>
        </div>
    )
}

export default Loading;