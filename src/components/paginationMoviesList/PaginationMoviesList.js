
import {useSelector} from "react-redux";

import css from './PaginationMoviesList.module.css'

const PaginationMoviesList = ({actualPage, setQuery}) => {

    const {maxPage} = useSelector(state => state.moviesList);

    const firstPage = () => {
        const page = actualPage = 1
        setQuery({page: `${page}`})
    };

    const prevPage = () => {
        const page = actualPage - 1;
        setQuery({page: `${page}`})
    };

    const nextPage = () => {
        const page = actualPage + 1;
        setQuery({page: `${page}`})
    };

    const lastPage = () => {
        const page = actualPage = 500;
        setQuery({page: `${page}`})
    };

    return (
        <div className={css.pagination}>

                <button onClick={firstPage}>First</button>
                <button disabled={actualPage<2} onClick={prevPage}>Prew</button>
                <button > {actualPage}</button>
                <button disabled={actualPage>499} onClick={nextPage}>next</button>
                <button onClick={lastPage}>Last</button>

        </div>
    );
};

export {PaginationMoviesList};