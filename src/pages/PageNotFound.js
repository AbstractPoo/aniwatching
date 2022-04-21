import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./PageNotFound.css";
class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div id="not-found">404</div>
      </div>
    );
  }
}

export default PageNotFound;
