import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {SearchInput} from "../searchInput/searchInput";



const Header = () => {


    return (
        <div >
            <div className={css.header}>
                <NavLink to={'/allMovies'}> All movies </NavLink>
                <SearchInput/>
            </div>
        </div>
    );
};

export {Header};