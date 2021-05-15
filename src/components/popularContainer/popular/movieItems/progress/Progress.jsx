import React from 'react';
import style from './Progress.module.css';

const Progress = (props) => {

       const voteAverage = props.voteAverage.toString().replace('.', '');
       let popularity = voteAverage < 10 ? voteAverage + "0" : voteAverage;

       if (voteAverage < 60) {
              popularity = [popularity, '#A76801']
       } else if (voteAverage < 90) {
              popularity = [popularity, '#129B4E']
       } else {
              popularity = [popularity, '#AF0E0E']
       }

       return (

              <div className={style.container}>
                     <span className={style.popularity}>Popularity</span>
                     <div className={style.progressContainer}>
                            <div className={style.progress}
                                   style={{
                                          width: `${popularity[0]}%`,
                                          backgroundColor: popularity[1]
                                   }}></div>
                     </div>

                     <span>{popularity[0]}%</span>

              </div>
       )
}

export default Progress;