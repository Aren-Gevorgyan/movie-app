import * as axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const getPopularMovies = (pageNumber) => instanceAxios
  .get(`discover/movie?sort_by=popularity.desc&api_key=8cdd9fff7ba2a5254932216a82dee30e&page=${pageNumber}`)
  .then((res) => res.data);

(() => instanceAxios
  .get('discover/movie?with_genres=14&sort_by=vote_average.desc&vote_count.gte=10'
        + '&api_key=8cdd9fff7ba2a5254932216a82dee30e')
  .then((res) => {
    console.log(res);
  }))();

const getWatchMoviesByYear = (pageNumber = 1, dateFrom, dateTo) => instanceAxios
  .get(`discover/movie?primary_release_date.gte=${dateFrom}&primary_release_date.lte=${dateTo}&api_key=8cdd9fff7ba2a5254932216a82dee30e&page=${pageNumber}`)
  .then((res) => {
    console.log(res);
    return res.data;
  });

const popularApi = {
  getPopularMovies,
  getWatchMoviesByYear,
};

export default popularApi;
