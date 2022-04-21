import "./Episodes.css";
import NavigationBar from "../../components/NavigationBar";
import MiniNavigationBar from "../../components/MiniNavigationBar";
import { Link } from "react-router-dom";

function Episodes({ animeDetails, animeId }) {
  return (
    <div id="anime-container">
      <NavigationBar />
      <div id="anime">
        <MiniNavigationBar />
        {animeDetails ? (
          <div id="episodes-container">
            {animeDetails.episodesList.map((entry) => {
              return (
                <div key={entry.episodeNum}>
                  <Link to={`/anime/${animeId}/episode/${entry.episodeNum}`}>
                    {entry.episodeNum}
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}
export default Episodes;
