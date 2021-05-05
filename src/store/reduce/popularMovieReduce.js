import { popularApi } from '../../dal/api';

const POPULAR = "POPULAR";
const INCREMENT_PAGE = "INCREMENT PAGE";
const LOADING = "LOADING";

const initialState = {
    movieItems: [],
    totalPages: null,
    page: 1,
    loading: false,
}

const popularReduce = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR:
            return {...state,
                movieItems: [...state.movieItems, ...action.movieItems],
                page: action.page,
                totalPages: action.totalPages,
                loading: false,
            };
        case LOADING:
            return {...state, loading: action.loader };
        case INCREMENT_PAGE:
            return {...state, page: action.pageNumber };
        default:
            return state;
    }
}

const setMovieItems = (movieItems, page, totalPages) =>
    ({ type: POPULAR, movieItems, page, totalPages });

const incrementPage = (pageNumber) => ({ type: INCREMENT_PAGE, pageNumber });
const loading = (loader) => ({ type: LOADING, loader });

export const getPopularMovie = (pageNumber) => {
    return async(dispatch) => {
        dispatch(loading(true));
        const data = await popularApi.getPopularMovie(pageNumber);
        dispatch(setMovieItems(data.results, data.page, data.total_pages));
        dispatch(incrementPage(pageNumber + 1))
    }
}

export default popularReduce;