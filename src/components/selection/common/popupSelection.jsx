import React from "react";
import "../../../css/app.css";
import { Link, Route } from "react-router-dom";
import ShoppingCart from "../../../components/shoppingCart";
import Movies from "../../../components/movies";
import RouterDemo from "../../../components/router";

export const PopupSelection = props => {
  return (
    <div>
      <Link to="/shopping-cart">shoppingCart</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/router-demo">RouterDemo</Link>

      <div>
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/movies" component={Movies} />
        <Route path="/router-demo" component={RouterDemo} />
      </div>
    </div>
  );
};
