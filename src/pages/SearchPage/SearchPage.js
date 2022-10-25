import {useSearchParams} from "react-router-dom";

import {PaginationMoviesList, SearchMovies} from "../../components";


const SearchPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const actualPage = +query.get('page');

    return (
        <div>
           <PaginationMoviesList actualPage={actualPage} setQuery={setQuery}/>
           <SearchMovies query = {query}/>
           <PaginationMoviesList actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {SearchPage};