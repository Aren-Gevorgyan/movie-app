import * as axios from 'axios';

const instanceAxios = axios.create({
    baseUrl: "https://api.themoviedb.org/3/",

})

const getPopularMovie = () => {
    return instanceAxios.get('discover/movie?sort_by=popularity.desc&api_key=8cdd9fff7ba2a5254932216a82dee30e')
        .then(res => res.data);
}

export const popularApi = {
    getPopularMovie,
}