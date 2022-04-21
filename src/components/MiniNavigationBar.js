import { Link } from "react-router-dom";
import "./MiniNavigationBar.css";

function MiniNavigationBar({ animeId, selected }) {
  return (
    <header id="mheader">
      <div id="mheader-container">
        <ul>
          <Link
            to={`/anime/${animeId}`}
            className={selected === undefined ? "selected" : ""}
          >
            <span>OVERVIEW</span>
          </Link>
          <Link
            to={`/anime/${animeId}/episodes`}
            className={selected == "search" ? "selected" : ""}
          >
            <span>EPISODES</span>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default MiniNavigationBar;
