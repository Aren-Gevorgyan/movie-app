import { popularApi } from '../../dal/api';

const POPULAR = "POPULAR";

const initialState = {
    movieItems: [],
    totalPages: null,
    page: null,
}

const popularReduce = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR:
            console.log({...state, movieItems: [...state.movieItems, ...action.movieItems], page: action.page, totalPages: action.totalPages })
            return {...state, movieItems: [...state.movieItems, ...action.movieItems], page: action.page, totalPages: action.totalPages };
        default:
            return state;
    }
}

const setMovieItems = (movieItems, page, totalPages) => ({ type: POPULAR, movieItems, page, totalPages });

export const getPopularMovie = (pageNumber) => {
    return (dispatch) => {
        popularApi.getPopularMovie(pageNumber).then(data => {
            dispatch(setMovieItems(data.results, data.page, data.total_pages));
            // dispatch(toDoLoading(false));
        })
    }
}

export default popularReduce;