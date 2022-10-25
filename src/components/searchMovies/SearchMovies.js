import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesListActions} from "../../redux";
import {MoviesListCards} from "../moviesListCards/MoviesListCards";

const SearchMovies = ({query}) => {
    const dispatch = useDispatch();
    const {moviesSearch} = useSelector(state => state.moviesList);

   useEffect(() => {
        dispatch(moviesListActions.getMoviesBySearch({query}));
    }, [dispatch, query]);

    return (
        <div>
            {moviesSearch.map(movie => <MoviesListCards key={movie.id} movie={movie}/>)}
        </div>
    );
};

export { SearchMovies };