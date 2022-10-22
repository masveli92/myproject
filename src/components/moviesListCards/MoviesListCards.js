// import {useNavigate} from "react-router-dom"

import {posterURL} from "../../configs";
import css from './MoviesListCards.module.css'

const MoviesListCards = ({movie}) => {

    return (
        <div className={css.movieBlock}>
            <img src={posterURL + movie.poster_path}/>
            <h3>{movie.title} - {movie.vote_average}</h3>
        </div>
    );
    // const navigate = useNavigate();
    //
    // return (
    //     <div onClick={() => navigate('/movieDetails' + id)}>
    //         <PosterPreview posterImage={movie.poster_path}/>
    //         <div >{movie.title}</div>
    //         <StarsRating movieRating={movie.vote_average} allowHover={false} size={15} vote={false}/>
    //     </div>
    // );

};

export {MoviesListCards};
