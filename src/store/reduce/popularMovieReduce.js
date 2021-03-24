import { popularApi } from '../../dal/api';

const POPULAR = "POPULAR";
const SET_NEW_PAGES_NUMBER = "SET_NEW_PAGES_NUMBER";
const DISABLED_NEXT = "DISABLED NEXT";
const DISABLED_PREV = "DISABLED PREV";
const LOADING = "LOADING";

const initialState = {
    movieItems: [],
    totalPages: null,
    page: 1,
    currentPage: { firstPage: 1, lastPage: 4 },
    prevButtonDisabled: true,
    nextButtonDisabled: false,
    loading: false,
}

const popularReduce = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR:
            return {...state, movieItems: action.movieItems, page: action.page, totalPages: action.totalPages };
        case SET_NEW_PAGES_NUMBER:
            return {...state, currentPage: action.newPagesNumber };
        case DISABLED_PREV:
            return {...state, nextButtonDisabled: action.disabled }
        case DISABLED_NEXT:
            return {...state, prevButtonDisabled: action.disabled };
        case LOADING:
            return {...state, loading: action.loading }
        default:
            return state;
    }
}

const setMovieItems = (movieItems, page, totalPages) => ({ type: POPULAR, movieItems, page, totalPages });
export const setNewPagesNumber = (newPagesNumber) => ({ type: SET_NEW_PAGES_NUMBER, newPagesNumber });
export const setDisabledPrev = (disabled) => ({ type: DISABLED_PREV, disabled });
export const setDisabledNext = (disabled) => ({ type: DISABLED_NEXT, disabled });
export const toDoLoading = (loading) => ({ type: LOADING, loading })

export const getPopularMovie = (pageNumber) => {
    return (dispatch) => {
        popularApi.getPopularMovie(pageNumber).then(data => {
            dispatch(setMovieItems(data.results, data.page, data.total_pages));
            dispatch(toDoLoading(false));
        })
    }
}

export default popularReduce;