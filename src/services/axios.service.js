import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create ({baseURL});

axiosService.interceptors.request.use((config ) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzliYWNlZGExMzc3Yzc2MDUxNjQwNjVlZWMyMWNhYSIsInN1YiI6IjYzNGEwOGJjZjE3NTljMDA3ZmMwMDkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bWxWpgdFYwdUojerArBVJrlu286XhRaK0fZhzPbl58'

    config.headers.Authorization = `Bearer ${token}`;
    return config
    });
export {axiosService}