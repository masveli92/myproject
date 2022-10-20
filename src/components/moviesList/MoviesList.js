import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesListActions} from "../../redux";
import {MoviesListCards} from "../moviesListCards/MoviesListCards";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {moviesList} = useSelector ( state => state.moviesListReducer)

    useEffect( ()=>{
       dispatch(moviesListActions.getMovies())
    }, []);

    return (
        <div>
            {moviesList.map(movie => <MoviesListCards key ={movie.id} movie = {movie}/>)}
        </div>
    );
}

export {MoviesList};