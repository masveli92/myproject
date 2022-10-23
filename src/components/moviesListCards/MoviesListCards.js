import {useNavigate} from "react-router-dom"

import css from './MoviesListCards.module.css'
import {PosterPreview} from "../posterPreview/PosterPreview";


const MoviesListCards = ({movie}) => {

    let navigate = useNavigate();

    return (
       <div className={css.movieBlock}
            onClick={() => {navigate('/movieDetails' + movie.id.toString(), {state: {...movie}})}}>
            <PosterPreview posterImage= {movie.poster_path}/>
            <h3>{movie.title} </h3>

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
