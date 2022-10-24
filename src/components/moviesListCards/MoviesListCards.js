import {useNavigate} from "react-router-dom"

import css from './MoviesListCards.module.css'
import {PosterPreview} from "../posterPreview/PosterPreview";
import {StarsRating} from "../starsRating/StarsRating";


const MoviesListCards = ({movie}) => {

    const navigate = useNavigate();

    return (
       <div className={css.movieBlock}
            onClick={() => {navigate('/movieDetails' + movie.id.toString(), {state: {...movie}})}}>
            <PosterPreview posterImage= {movie.poster_path}/>
            <h3>{movie.title} </h3>
           <StarsRating>{movie.vote_average}</StarsRating>

       </div>
    );
};

export {MoviesListCards};
