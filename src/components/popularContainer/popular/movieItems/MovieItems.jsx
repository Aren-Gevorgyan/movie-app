import React from 'react';
import style from './MovieItems.module.css';
import Progress from './progress/Progress';

const img_api = "https://image.tmdb.org/t/p/w500"

const MovieItems = (props) => {

    return (

        <div className={style.container}>

            <img src={img_api + props.poster} alt='moviePhoto' />

            <div className={style.description}>

                <Progress voteAverage={props.voteAverage} />
                <span className={style.title}>{props.title}</span>
                <span className={style.date}>Date {props.date}</span>
            </div>

        </div>

    )
}

export default MovieItems;