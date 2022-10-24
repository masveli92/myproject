import {NavLink} from "react-router-dom";

import css from './Header.module.css'




const Header = () => {
    return (
        <div >
            <div className={css.header}>
                <NavLink to={'/allMovies'}> All movies </NavLink>

            </div>
        </div>
    );
};

export {Header};