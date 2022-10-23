import {useSearchParams} from "react-router-dom";

import {MoviesList, PaginationMoviesList} from "../../components";

const MoviesListPage = () => {

    const [query,setQuery] = useSearchParams({page: '1'});
    const actualPage = +query.get('page');

    return (
        <div>
            <PaginationMoviesList actualPage={actualPage} setQuery={setQuery}/>
            <MoviesList query={query}/>
            <PaginationMoviesList actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {MoviesListPage};