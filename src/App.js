import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Anime from "./pages/Anime";
import Player from "./pages/Player";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/anime/:animeId" element={<Anime />} />
          {/*<Route path="/anime/:animeId/episode">
            <Redirect to="/anime/:animeId/episode/1" />
  </Route>*/}
          <Route
            path="/anime/:animeId/episode/:episodeNumber"
            element={<Player />}
          />
          {
            //<Route path="/anime/:animeId/:episodeNumber" element={<Player />} />
          }
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
