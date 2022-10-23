import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesListActions} from "../../redux";
import {MoviesListCards} from "../moviesListCards/MoviesListCards";
import css from './MoviesList.module.css'

  const MoviesList = ({query}) => {

        const dispatch = useDispatch();

        const {moviesList} = useSelector ( state => state.moviesList)

      useEffect( ()=>{
             dispatch(moviesListActions.getMovies({page: query.get('page')}))
    },  [dispatch, query]);


    return (
        <div className={css.movieList}>
            {moviesList.results?.map(movie => <MoviesListCards key ={movie.id} movie = {movie}/>)}
        </div>
    );
}

export {MoviesList};