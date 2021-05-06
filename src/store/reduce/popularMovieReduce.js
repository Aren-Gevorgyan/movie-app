import { popularApi } from '../../dal/api';

const POPULAR = "POPULAR";
const INCREMENT_PAGE = "INCREMENT PAGE";
const LOADING = "LOADING";
const INITIAL_STATE = "INITIAL_STATE";
const LOAD_MORE = "LOAD MORE";

const initialState = {
    movieItems: [],
    totalPages: null,
    page: 1,
    loading: false,
    loadMore: true,
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
        case INITIAL_STATE:
            return {...state,
                movieItems: [...action.movies],
                loading: false,
            };
        case LOADING:
            return {...state, loading: action.loader };
        case LOAD_MORE:
            return {...state, loadMore: action.loadMore };
        case INCREMENT_PAGE:
            return {...state, page: action.pageNumber };
        default:
            return state;
    }
}

const setMovieItems = (movieItems, page, totalPages) =>
    ({ type: POPULAR, movieItems, page, totalPages });

const incrementPage = (pageNumber) => ({ type: INCREMENT_PAGE, pageNumber });
const initialMovie = (movies) => ({ type: INITIAL_STATE, movies });
const loading = (loader) => ({ type: LOADING, loader });
export const setLoadMore = (loadMore) => ({ type: LOAD_MORE, loadMore });

const getMovies = async(dispatch, pageNumber = 1, fun) => {
    dispatch(loading(true));
    const data = await popularApi.getPopularMovie(pageNumber);
    dispatch(fun(data.results, data.page, data.total_pages));
    dispatch(incrementPage(pageNumber + 1))
}

export const getInitialMovie = (pageNumber) => {
    return (dispatch) => {
        dispatch(setLoadMore(true));
        getMovies(dispatch, pageNumber, initialMovie);
    };
}

export const getPopularMovie = (pageNumber) => {
    return (dispatch) => {
        getMovies(dispatch, pageNumber, setMovieItems);
    }
}

export default popularReduce;