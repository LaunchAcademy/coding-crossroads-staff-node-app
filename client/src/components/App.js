import React from "react";
import { BrowserRouter, Router, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root";

import ResourceList from "./resources/ResourceList.js"

import "../assets/scss/main.scss";

const App = props => {
  return(
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ResourceList}/>
        <Route to="/resources" component={ResourceList}/>
      </Switch>
    </BrowserRouter>
  )
};

export default hot(App);
