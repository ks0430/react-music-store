import React, { Component } from "react";
import Navbar from "./navigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import MovieDetail from "./movieForm";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import NotFound from "./common/notFound";
import "../../css/movie.scss";

export default class MovieDemo extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="container-fluid mt-4">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/new" component={MovieDetail} />
            <Route path="/movies/:id" component={MovieDetail} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}
