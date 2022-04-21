import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "./Player.css";
import axios from "axios";

import AnimePlayer from "../components/AnimePlayer";

function Player() {
  let { animeId, episodeNumber } = useParams();

  episodeNumber = episodeNumber || 1;

  const [source, setSource] = useState();

  useEffect(() => {
    axios
      .get(
        `https://animix-plyr-scraper.abstractpoo.repl.co/${animeId}/${episodeNumber}`
      )
      .then((response) => {
        setSource(response.data);
      });
  }, []);

  return (
    <div id="player-container">
      <NavigationBar />
      <div id="player-page">
        {source !== undefined ? (
          <div id="player-container">
            <AnimePlayer source={source} />
          </div>
        ) : (
          <div>please wait</div>
        )}
      </div>
    </div>
  );
}

export default Player;
