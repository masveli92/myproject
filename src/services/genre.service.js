import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const genreService = {
    getGenres : () => axiosService.get(urls.genre)
};