import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getMovies: (page= 1) => axiosService.get(urls.movies, {params:{page}}),
    getMovieById: (id) => axiosService.get(urls.movieById+'/'+id),
    getMoviesBySearch:(name, page=1) => axiosService.get('/search/movie?query='+name, {params:{ page}})

}
export {moviesService}




