import popularApi from '../../dal/api';

const POPULAR = 'popular/POPULAR';
const INCREMENT_PAGE = 'popular/INCREMENT PAGE';
const LOADING = 'popular/LOADING';
const INITIAL_STATE = 'popular/INITIAL_STATE';
const MOVIE_BY_YEAR = 'popular/MOVIE BY YEAR';
const NEW_MOVIE_BY_YEAR = 'popular/NEW MOVIE BY YEAR';
const LOAD_MORE = 'popular/LOAD MORE';
export const TYPE_POPULAR = 'poplar/TYPE POPULAR';
export const TYPE_BY_YEAR = 'poplar/TYPE ByYEAR';

const initialState = {
  movieItems: [],
  page: 1,
  loading: false,
  loadMore: true,
  movieType: TYPE_POPULAR,
  dateFrom: null,
  dateTo: null,
};

const popularReduce = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR:
      return {
        ...state,
        movieItems: [...state.movieItems, ...action.movieItems],
        loading: false,
        typeMovie: action.typeMovie,
        movieType: TYPE_POPULAR,
      };
    case INITIAL_STATE:
      return {
        ...state,
        movieItems: [...action.movies],
        loading: false,
        movieType: TYPE_POPULAR,
      };
    case MOVIE_BY_YEAR:
      return {
        ...state,
        movieItems: [...action.movies],
        loading: false,
        movieType: TYPE_BY_YEAR,
        dateFrom: action.dateFrom,
        dateTo: action.dateTo,
      };
    case NEW_MOVIE_BY_YEAR:
      return {
        ...state,
        movieItems: [...state.movieItems, ...action.movies],
        loading: false,
        movieType: TYPE_BY_YEAR,
      };
    case LOADING:
      return { ...state, loading: action.loader };
    case LOAD_MORE:
      return { ...state, loadMore: action.loadMore };
    case INCREMENT_PAGE:
      return { ...state, page: action.pageNumber };
    default:
      return state;
  }
};

const setMovieItems = (movieItems, typeMovie) => ({ type: POPULAR, movieItems, typeMovie });

const incrementPage = (pageNumber) => ({ type: INCREMENT_PAGE, pageNumber });

const initialMovies = (movies) => ({ type: INITIAL_STATE, movies });

const moviesByYear = (movies, dateFrom, dateTo) => ({
  type: MOVIE_BY_YEAR,
  movies,
  dateFrom,
  dateTo,
});

const newMoviesByYear = (movies) => ({ type: NEW_MOVIE_BY_YEAR, movies });

const loading = (loader) => ({ type: LOADING, loader });
export const setLoadMore = (loadMore) => ({ type: LOAD_MORE, loadMore });

const getMovies = async (dispatch, pageNumber = 1, fun) => {
  dispatch(loading(true));
  // get data
  const data = await popularApi.getPopularMovies(pageNumber);
  // set result
  dispatch(fun(data.results));
  // increase the number page
  dispatch(incrementPage(pageNumber + 1));
};

export const getInitialMovies = (pageNumber) => (dispatch) => {
  dispatch(setLoadMore(true));
  getMovies(dispatch, pageNumber, initialMovies);
};

export const getPopularMovies = (pageNumber) => (dispatch) => {
  getMovies(dispatch, pageNumber, setMovieItems);
};

const getMoviesByYear = async (page, dateFrom, dateTo, dispatch, setMoviesAC) => {
  dispatch(loading(true));
  const data = await popularApi.getWatchMoviesByYear(page, dateFrom, dateTo);
  dispatch(setMoviesAC(data.results, dateFrom, dateTo));
  dispatch(incrementPage(data.page + 1));
};

export const watchMoviesByYear = (page, dateFrom, dateTo) => (dispatch) => {
  dispatch(setLoadMore(true));
  getMoviesByYear(page, dateFrom, dateTo, dispatch, moviesByYear);
};

export const getNewMoviesByYear = (page, dateFrom, dateTo) => (dispatch) => {
  getMoviesByYear(page, dateFrom, dateTo, dispatch, newMoviesByYear);
};

export default popularReduce;
