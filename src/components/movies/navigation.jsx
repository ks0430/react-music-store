import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
          {/* navbar-expand-lg will give desktop browser none collapse */}
          <NavLink to="/movies" className="navbar-brand">
            MusicStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#musicNavbar"
            aria-controls="musicNavbar"
            aria-expanded="false"
            aria-label="Toggle"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="musicNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customers" className="nav-link">
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rentals" className="nav-link">
                  Rentals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
