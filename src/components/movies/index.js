import React, { Component } from "react";
import Navbar from "./navigation";
import { Route, Switch } from "react-router-dom";
import NotFound from "./common/notFound";

export default class MovieDemo extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Navbar />
        </Switch>
      </main>
    );
  }
}
