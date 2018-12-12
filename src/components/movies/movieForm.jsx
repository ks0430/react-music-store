import React, { Component } from "react";

export default class MovieDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    return (
      <div>
        <h1>Movie {id}</h1>
        <button
          className="btn btn-primary m-2"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}
