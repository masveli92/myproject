import {Outlet} from "react-router-dom"

import {Header} from "../components";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className = {css.mainBack}>
            <Header/>
            <Outlet/>

        </div>
    );
};

export {MainLayout};