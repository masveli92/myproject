import {axiosService} from "./axios.service";

import {urls} from "../configs";

const moviesService = {
    getMovies: () => axiosService.get(urls.movies),
    getMovieById: (id) => axiosService.get(urls.movieById+'/'+id)
}
export {moviesService}

// const moviesService = {
//     getMovies: (page = 1) => axiosService.get(urls.movies, {
//         params: {
//             page,
//             // language: 'en-US',
//
//         }
//     }),
//     searchByName: (query, page = 1) => axiosService.get(urls.searchMoviesByName, {
//         params: {
//             page,
//             query
//             // language: 'en-US'
//         }
//     }),
//     getMovieById: (id) => axiosService.get(urls.movieById + '/' + id),
// };
//
// export {moviesService}