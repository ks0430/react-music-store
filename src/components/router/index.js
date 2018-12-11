import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import _ from "lodash";
import queryString from "query-string";

export default class RouterDemo extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Nav />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Admin} />
            <Redirect from="/messages" to="posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export const Products = props => {
  const arr = _.range(1, 5);
  return (
    <div className="col-2">
      <div className="list-group mt-5">
        {arr.map(ele => (
          <Link
            key={ele}
            to={`/products/${ele}`}
            className="list-group-item list-group-item-action "
          >
            Product {ele}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const ProductDetails = ({ match, location, history }) => {
  return (
    <div className="mt-5">
      <h4>{match.params.id}</h4>
      <button
        className="btn btn-primary m-2 "
        onClick={() => history.replace("/products")}
      >
        Save
      </button>
    </div>
  );
};

export const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <div className="mt-5">
      Posts - Year - {match.params.year}
      Month - {match.params.month}
    </div>
  );
};

export const Home = props => {
  return <div className="mt-5">Home</div>;
};

export const Admin = params => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col">
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/posts" component={Posts} />
        </div>
      </div>
    </div>
  );
};

export const SideBar = params => {
  return (
    <div className="list-group">
      <Link
        className="list-group-item list-group-item-action"
        to="/admin/users"
      >
        Users
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/admin/posts"
      >
        Posts
      </Link>
    </div>
  );
};

export const Users = params => {
  return <div>Users</div>;
};

export const NotFound = props => {
  return <h1>Not Found</h1>;
};

const Nav = props => {
  return (
    <React.Fragment>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
