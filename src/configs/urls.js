
const baseURL = 'https://api.themoviedb.org/3'

const urls ={
    movies:'/discover/movie',
    movieById:'/movie',
    genre:'/genre/movie/list',
    searchByName:'/search/movie'
}

const posterURL = 'https://image.tmdb.org/t/p/w500'

export {
    baseURL,
    urls,
    posterURL
}