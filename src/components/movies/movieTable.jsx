import React, { Component } from "react";
import Like from "./common/like";

class MovieTable extends Component {
  render() {
    const { movies, onDelete, onLike, onSort } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort("title")}>Title</th>
              <th onClick={() => onSort("genre.name")}>Genre</th>
              <th onClick={() => onSort("numberInStock")}>Stock</th>
              <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onToggle={() => onLike(movie)} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        onDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
