import React, { Component, Fragment } from "react";
import Types from "../redux-containers/Types";
import Comparisons from "../redux-containers/Comparisons";
import "../styles/app.scss";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <span className="config_title">Types</span>
        <Types />
        <span className="config_title">Comparisons</span>
        <Comparisons />
      </Fragment>
    );
  }
}
