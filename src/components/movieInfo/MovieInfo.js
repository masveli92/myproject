import {useLocation} from "react-router-dom";
import {PosterPreview} from "../posterPreview/PosterPreview";

function MovieInfo  () {
    let {state} = useLocation();

       return (
        <div>
            <div ><PosterPreview posterImage= {state.poster_path}/></div>
            <div>
                <h2>{state.title}</h2>
                <h3>{state.vote_average}</h3>
                <h3> {state.age}</h3>
                <h3>{state.genre_ids}</h3>
                <h3>{state.original_language}</h3>
                <h3>{state.release_date}</h3>
            </div>
            <div><h3>{state.overview}</h3> </div>
        </div>
    );
};

export {MovieInfo};