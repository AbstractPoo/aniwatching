import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "./Search.css";
import axios from "axios";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearchKeyword = searchParams.get("s") || "";

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gogoanime.herokuapp.com/search?keyw=${querySearchKeyword}`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, [querySearchKeyword]);

  function handleKeypress(e) {
    if (e.key === "Enter") {
      setSearchParams({
        s: e.target.value
      });
    }
  }

  return (
    <div>
      <NavigationBar selected="search" />
      <div id="search">
        <input
          id="search-input"
          onKeyPress={handleKeypress}
          defaultValue={querySearchKeyword}
          autoComplete="off"
          autoFocus
        />
        <div id="entries-container">
          {APIData.map((entry) => {
            return (
              <Link
                to={`/anime/${entry.animeId}`}
                key={entry.animeId}
                className="anime-entry"
                style={{
                  backgroundImage: `url(
                  ${entry.animeImg}
                )`
                }}
              >
                <div className="info-container">
                  <span>{entry.animeTitle}</span>
                  <span className="anime-status">{entry.status}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
