import React, { Component } from "react";
import Like from "./common/like";
import { Table } from "./common/table";
import { Link } from "react-router-dom";
import auth from './services/authService';

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onToggle={() => this.props.onLike(movie)} />
      )
    },

  ];

  deleteColumn = {
    key: "delete",
    content:   movie => (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          this.props.onDelete(movie);
        }}
      >
        Delete
      </button>
    )
  }

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if(user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, sortColumn, onSort } = this.props;

    // if(!user || !user.isAdmin) {
    //   this.columns = this.columns.filter(item => item["key"] !== "delete");
    // }

    return (
      <div>
        <Table
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
          data={movies}
        />
      </div>
    );
  }
}

export default MovieTable;
