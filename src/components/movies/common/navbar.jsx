import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Movies from "../movies";
import Customers from "../customers";
import Rentals from "../rentals";

const Navbar = () => {
  return (
    <div>
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
};

export default Navbar;
