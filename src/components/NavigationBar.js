import React from "react";
import "./NavigationBar.css";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

class NavigationBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.selected = props.selected;
    document.body.onscroll = this.handleScroll;
    this.htmlElement = document.querySelector("html");

    this.state = {
      scrolled: false,
      htmlElement: document.querySelector("html")
    };
  }

  handleScroll = (e) => {
    if (this.htmlElement.scrollTop !== 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    return (
      <header id="header">
        <div
          id="header-container"
          className={this.state.scrolled ? "scrolled" : ""}
        >
          <Link to="/">
            ANIWATCHING
            {
              //<img id="logo" src={Logo} alt="logo" />
            }
          </Link>
          <ul>
            <Link
              to="/"
              className={this.selected === undefined ? "selected" : ""}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/search"
              className={this.selected == "search" ? "selected" : ""}
            >
              <span>Search</span>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}

/*
to be implemented at a later date
            <a>
              <span>Community</span>
              <KeyboardArrowDownRoundedIcon className="arrow-down" />
            </a>
            <a>
              <span>Anime</span>
              <KeyboardArrowDownRoundedIcon className="arrow-down" />
            </a>
            <a>
              <span>User</span>
              <KeyboardArrowDownRoundedIcon className="arrow-down" />
            </a>
*/

const relations = {
  search: "search",
  anime: "search"
};

export default function NavigationBar() {
  const location = useLocation();
  let toBeSelected = location.pathname.split("/")[1] || undefined;
  return <NavigationBarComponent selected={relations[toBeSelected]} />;
}
