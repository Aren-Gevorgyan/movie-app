import style from './Popular.module.css';
import React from 'react';
import MovieItems from './movieItems/MovieItems';

class Popular extends React.Component{

    movieItems = [];

    state={
        popularMovie: this.props.popularMovie,
    }

    componentDidMount(){
        this.props.getPopularMovie(this.props.page);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.popularMovie !== this.props.popularMovie){
            this.setState({
                popularMovie: this.props.popularMovie,
            })
        }

        this.movieItems = this.state.popularMovie.map(movie => {
            return <MovieItems key={movie.id} 
                               title={movie.original_title}
                               date={movie.release_date}
                               poster={movie.poster_path}
                               voteAverage={movie.vote_average}/> 
        })
    }

    render() {
        return (
            <div className={style.container}>

                <div className={style.movie}>
                   {this.movieItems}
                </div>

            </div>
        )
    }
}
  
export default Popular;