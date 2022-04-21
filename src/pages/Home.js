import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Home.css";
import RandomPick from "../assets/RandomPick.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home-container">
        <NavigationBar />
        <div id="home">
          <div className="content-section">
            <div className="info-card">
              <div className="title">MOTD</div>
              <div className="content" id="motd">
                <h2>Welcome to aniwatching</h2>
                <ul>
                  <li>
                    We are currently trying our hardest to get the system up and
                    running
                  </li>
                </ul>
              </div>
            </div>
            <div className="info-card">
              <div className="title">Random Pick</div>
              <div className="content pick-container">
                <img src={RandomPick} alt="random pick" />
              </div>
            </div>
          </div>
          <div className="content-section">
            LOL LIKE THE POPULAREST ANIME ATM AND THAT
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
