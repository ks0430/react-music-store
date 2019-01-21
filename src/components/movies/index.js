import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Toastify plugin
import { ToastContainer } from 'react-toastify';
import Navbar from "./navigation";
import Movies from "./movies.jsx"; // cannot be ./movies
import Customers from "./customers";
import Rentals from "./rentals";
import MovieDetail from "./movieForm";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import NotFound from "./common/notFound";
import Logout from './logout';
import auth from './services/authService';
import ProtectedRoute from './common/protectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import "./css/app.css";

export default class MovieDemo extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({user});
  }

  render() {
    const { user } = this.state;
    return (
      <main>
        <ToastContainer />
        <Navbar user={this.state.user}/>
        <div className="container-fluid mt-4">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <ProtectedRoute 
              path="/movies/:id" 
              component={MovieDetail}
            />
            <Route path="/movies" 
              render={ props => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}
