export const getMovieItems = (state) => {
    return state.popularMovie.movieItems;
}

export const getPage = (state) => {
    return state.popularMovie.page;
}

export const getLoading = (state) => {
    return state.popularMovie.loading;
}

export const getLoadMore = (state) => {
    return state.popularMovie.loadMore;
}

export const getMovieType = (state) => {
    return state.popularMovie.movieType;
}

export const getDateFrom = (state) => {
    return state.popularMovie.dateFrom;
}

export const getDateTo = (state) => {
    return state.popularMovie.dateTo;
}