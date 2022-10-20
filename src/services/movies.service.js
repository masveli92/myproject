import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getMovies: () => axiosService.get(urls.movies),
    getById: (id) => axiosService.get(urls.movieById+'/'+id)
}
export {moviesService}
