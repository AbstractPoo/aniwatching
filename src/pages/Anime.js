import { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrowRounded";
import NavigationBar from "../components/NavigationBar";
import MiniNavigationBar from "../components/MiniNavigationBar";
import Player from "./Player";

import { useParams, Link } from "react-router-dom";
import "./Anime.css";
import axios from "axios";

function Anime() {
  const [animeDetails, setAnimeDetails] = useState();
  const { animeId } = useParams();

  useEffect(() => {
    axios
      .get(`https://gogoanime.herokuapp.com/anime-details/${animeId}`)
      .then((response) => {
        setAnimeDetails(response.data);
      });
  });

  return (
    <div id="anime-container">
      <NavigationBar />
      <div id="anime">
        <MiniNavigationBar animeId={animeId} />
        {animeDetails ? (
          <div id="anime-details">
            <div id="cover-container">
              <img src={animeDetails.animeImg} alt="cover" />
            </div>
            <div id="details">
              <h2>{animeDetails.animeTitle}</h2>
              <div id="release-info">
                <span className="blue">{animeDetails.releasedDate}</span>
                <span className="label success">{animeDetails.status}</span>
              </div>
              <div>
                <h4 id="description-text">Description</h4>
                <p id="description-synopsis">{animeDetails.synopsis}</p>
              </div>
            </div>
            <div id="stream-information">
              <Link id="stream-button" to="episode/1">
                <PlayArrowIcon />
                <span>Stream</span>
              </Link>
              <div id="air-information">
                <div>
                  <span className="semi-bold">Episodes</span>
                  <span className="label neutral">
                    {animeDetails.totalEpisodes ||
                      animeDetails.episodesList.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default Anime;

/*
<Routes>
      <Route path="/">
        <Route
          index
          element={<Overview animeDetails={animeDetails} animeId={animeId} />}
        />
        <Route
          path="episodes"
          element={<Episodes animeDetails={animeDetails} animeId={animeId} />}
        />
        <Route path="episode/:episodeNumber" element={<Player />} />
        {
          //<Route path="/anime/:animeId/:episodeNumber" element={<Player />} />
        }
      </Route>
    </Routes>
    */
