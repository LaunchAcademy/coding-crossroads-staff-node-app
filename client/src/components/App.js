import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root";

import ResourceList from "./resources/ResourceList.js"
import ResourceDetails from "./resources/ResourceDetails"

import "../assets/scss/main.scss";

const App = () => {
  return(
    <div className="grid-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ResourceList}/>
          <Route exact path="/resources" component={ResourceList}/>
          <Route exact path="/resources/:id" component={ResourceDetails}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default hot(App);
