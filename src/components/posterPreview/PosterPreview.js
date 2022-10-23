import {posterURL} from "../../configs";

const PosterPreview = ({posterImage}) => {
    return (

        <img src={posterURL + posterImage} alt="poster"/>
    );
};

export {
    PosterPreview
};