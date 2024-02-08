import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages/index";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing"/>} />
        <Route path="movie/:id" element={<MovieDetail  apiPath="movie/"/>} />
        <Route path="movies/popular" element={<MovieList  apiPath="movie/popular"/>} />
        <Route path="movies/top" element={<MovieList  apiPath="movie/top_rated"/>} />
        <Route path="movies/upcoming" element={<MovieList  apiPath="movie/upcoming"/>} />
        <Route path="search" element={<Search  apiPath="search/movie"/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
