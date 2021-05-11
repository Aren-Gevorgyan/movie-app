import { popularApi } from '../../dal/api';

const POPULAR = "popular/POPULAR";
const INCREMENT_PAGE = "popular/INCREMENT PAGE";
const LOADING = "popular/LOADING";
const INITIAL_STATE = "popular/INITIAL_STATE";
const MOVIE_BY_YEAR = "popular/MOVIE BY YEAR";
const NEW_MOVIE_BY_YEAR = "popular/NEW MOVIE BY YEAR";
const LOAD_MORE = "popular/LOAD MORE";
export const TYPE_POPULAR = "poplar/TYPE POPULAR";
export const TYPE_ByYEAR = "poplar/TYPE ByYEAR"

const initialState = {
    movieItems: [],
    page: 1,
    loading: false,
    loadMore: true,
    movieType: TYPE_POPULAR,
    dateFrom: null,
    dateTo: null,
}

const popularReduce = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR:
            return {...state,
                movieItems: [...state.movieItems, ...action.movieItems],
                loading: false,
                typeMovie: action.typeMovie,
                movieType: TYPE_POPULAR,
            };
        case INITIAL_STATE:
            return {...state,
                movieItems: [...action.movies],
                loading: false,
                movieType: TYPE_POPULAR,
            };
        case MOVIE_BY_YEAR:
            return {...state,
                movieItems: [...action.movies],
                loading: false,
                movieType: TYPE_ByYEAR,
                dateFrom: action.dateFrom,
                dateTo: action.dateTo,
            };
        case NEW_MOVIE_BY_YEAR:
            return {...state,
                movieItems: [...state.movieItems, ...action.movies],
                loading: false,
                movieType: TYPE_ByYEAR,
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

const setMovieItems = (movieItems, typeMovie) =>
    ({ type: POPULAR, movieItems, typeMovie });

const incrementPage = (pageNumber) => ({ type: INCREMENT_PAGE, pageNumber });

const initialMovie = (movies) => ({ type: INITIAL_STATE, movies });

const movieByYear = (movies, dateFrom, dateTo) =>
    ({ type: MOVIE_BY_YEAR, movies, dateFrom, dateTo });

const newMovieByYear = (movies, dateFrom, dateTo) =>
    ({ type: NEW_MOVIE_BY_YEAR, movies });

const loading = (loader) => ({ type: LOADING, loader });
export const setLoadMore = (loadMore) => ({ type: LOAD_MORE, loadMore });

const getMovies = async(dispatch, pageNumber = 1, fun) => {
    dispatch(loading(true));
    //get data
    const data = await popularApi.getPopularMovie(pageNumber);
    //set result
    dispatch(fun(data.results));
    //increase the number page
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

const getMovieByYear = async(page, dateFrom, dateTo, dispatch, setMovieAC) => {
    dispatch(loading(true));
    const data = await popularApi.getWatchMovieByYear(page, dateFrom, dateTo);
    dispatch(setMovieAC(data.results, dateFrom, dateTo));
    dispatch(incrementPage(data.page + 1));
}

export const watchMovieByYear = (page, dateFrom, dateTo) => {
    return (dispatch) => {
        dispatch(setLoadMore(true));
        getMovieByYear(page, dateFrom, dateTo, dispatch, movieByYear);
    }
}

export const getNewMovieByYear = (page, dateFrom, dateTo) => {
    return (dispatch) => {
        getMovieByYear(page, dateFrom, dateTo, dispatch, newMovieByYear);
    }
}

export default popularReduce;