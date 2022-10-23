import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const genreService = {
    getAll : () => axiosService.get(urls.genre)
};