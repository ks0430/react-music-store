import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    const { user } = this.props;
    console.log("7",user);
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
              { !user &&
                <React.Fragment>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li> 
                </React.Fragment>
              }
              { user &&
                <React.Fragment>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">
                    {user.name}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Logout" className="nav-link">
                    Logout
                  </NavLink>
                </li> 
                </React.Fragment>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
