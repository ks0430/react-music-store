import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import "../../css/movie.scss";

export default class Navigation extends Component {
  render() {
    return (
      <div className="test">
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/customers">Customers</NavLink>
        <NavLink to="/rentals">Rentals</NavLink>
        <div>
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
          </Switch>
        </div>
      </div>
    );
  }
}
