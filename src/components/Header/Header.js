import css from './Header.module.css'
import {NavLink} from "react-router-dom";

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