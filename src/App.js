import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePage, MoviesListPage, NotFoundPage, SearchPage} from "./pages";


const App = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element = {<MainLayout/>}>
                <Route index element={<Navigate to={'allMovies'}/>}/>
                <Route path={'allMovies'} element={<MoviesListPage/>}/>
                <Route path={'movieDetails:movieId'} element={<MoviePage/>}/>
                <Route path={'movieSearch'} element={<SearchPage/>}/>
            </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
         </Routes>


    </div>
  );
}

export default App;
