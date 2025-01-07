import { Routes, Route } from "react-router-dom";
import Layout from "../views/layouts/index";
import Home from "../views/components/home/home";
import Movies from "../views/components/movies/movies";
import News from "../views/components/news/news";
import MoviesSingle from "../views/components/movies/moviesSingle";
import NewsSingle from "../views/components/news/newsSingle";
import SearchPage from "../views/components/search/Search";
import MoviePlay from "../views/components/movies/moviePlay";

const AppRoutes = ({ films, news }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout films={films} />}>
                <Route index element={<Home films={films} news={news} />} />
                <Route path="/movies" element={<Movies films={films} />} />
                <Route path="/news" element={<News news={news} />} />
                <Route path="/:filmName" element={<MoviesSingle films={films} />} />
                <Route path="/news/:newsTitle" element={<NewsSingle news={news} />} />
                <Route path="/search" element={<SearchPage films={films} />} />
                <Route path="/play" element={<MoviePlay films={films}/>} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
