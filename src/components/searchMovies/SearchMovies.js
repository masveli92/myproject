import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {moviesListActions} from "../../redux";
import {MoviesListCards} from "../moviesListCards/MoviesListCards";
import css from "./SearchMovies.module.css"

const SearchMovies = () => {

    const dispatch=useDispatch()
    const [query,_]=useSearchParams()

    const input=query.get('input')

    const {moviesList,totalPages}=useSelector(state => state.moviesList)

    useEffect(()=>{
        if(input){
            dispatch(moviesListActions.search({name: input, totalPages}))
            }

    },[input, dispatch, totalPages])

    return (
        <div className={css.searchList}>
            {moviesList.length&&moviesList.map(movie=><MoviesListCards movie={movie} key={movie.id}/>)}
        </div>
    );
};

export { SearchMovies };