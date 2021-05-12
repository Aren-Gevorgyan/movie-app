import React from 'react';
import style from './Genres.module.css';

const Genres = React.memo(({genresItem}) => {
      
      const clickGenresItem = (e) => {
          console.log(e.nativeEvent.srcElement.innerText);
      }

      const getGenresItem = genresItem.map((value)=>{
            return <div key={value.id} className={style.genresItems}
                        onClick={clickGenresItem}>{value.genre}</div>
      })

      return(
          <div className={style.container}>
            <h5>Genres</h5>
            <div className={style.genresItemsContainer}>
               {getGenresItem}
            </div>
          </div>
      )
});

export default Genres;