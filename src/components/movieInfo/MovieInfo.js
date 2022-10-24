import {useLocation} from "react-router-dom";

import {PosterPreview} from "../posterPreview/PosterPreview";
import css from './MovieInfo.module.css'
import {StarsRating} from "../starsRating/StarsRating";

function MovieInfo  () {
    let {state} = useLocation();

       return (
        <div className={css.movieInfoBlock}>
            <div className={css.movieInfoImage}><PosterPreview posterImage= {state.poster_path}/></div>
            <div>
                <h1 className={css.movieTitle}>{state.title}</h1>
                <h3>Genres: {state.genre_ids}</h3>
                <h3>Age: {state.age? "adult only":"any age category" }</h3>
                <h3>Rating: {state.vote_average} <StarsRating>{state.vote_average}</StarsRating> </h3>
                <h3>Language: {state.original_language}</h3>
                <h3>Date of release: {state.release_date}</h3>
                <h3>About movie:  {state.overview}</h3>
            </div>

        </div>
    );
};

export {MovieInfo};