import { popularApi } from '../../dal/api';

const POPULAR = "POPULAR";

const initialState = {
    movieItems: [],
}

const popularReduce = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR:
            return {...state, movieItems: action.data };
        default:
            return state;
    }
}

const setMovieItems = (data) => ({ type: POPULAR, data })

export const getPopularMovieThunk = () => {
    return (dispatch) => {
        popularApi.getPopularMovie().then(data => {
            dispatch(setMovieItems(data))
        })
    }
}

export default popularReduce;