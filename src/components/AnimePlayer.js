import { useEffect, useRef } from "react";
import "./AnimePlayer.css";

function AnimePlayer(props) {
  const { source } = props;

  return (
    <iframe
      allowFullScreen={true}
      scrolling="no"
      id="player"
      title="player"
      src={source.link}
      frameBorder="0"
    />
  );
}

export default AnimePlayer;
