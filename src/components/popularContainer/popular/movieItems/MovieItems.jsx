import style from './MovieItems.module.css';
import React from 'react';

const img_api = "https://image.tmdb.org/t/p/w500"

const MovieItems = (props) => {
    
    return (

        <div className={style.container}>
            <div>
               <img src={img_api + props.poster} alt='moviePhoto'/>
            </div> 
        </div>

    )
}
  
export default MovieItems;