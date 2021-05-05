import * as axios from 'axios';

const instanceAxios = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
})

const getPopularMovie = (pageNumber) => {

    return instanceAxios
        .get(`discover/movie?sort_by=popularity.desc&api_key=8cdd9fff7ba2a5254932216a82dee30e&page=${pageNumber}`)
        .then(res => {
            return res.data
        });
}

export const popularApi = {
    getPopularMovie,
}