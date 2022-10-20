import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesListActions} from "../../redux";
import {MoviesListCards} from "../moviesListCards/MoviesListCards";

const MoviesList = ({query}) => {
    const dispatch = useDispatch();
    const {movies} = useSelector ( state => state.moviesListReducer)

    useEffect( ()=>{
    //    dispatch(moviesListActions.getMovies({page: query.get('page')}))
    // },  [dispatch, query]);
    dispatch(moviesListActions.getMovies())
},  [dispatch]);

    return (
        <div>
            {movies.map(movie => <MoviesListCards key ={movie.id} movie = {movie}/>)}
        </div>
    );
}

export {MoviesList};