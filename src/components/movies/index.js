import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Pagination from "./pagination";
import MovieTable from "./movieTable";
import ListGroup from "./listGroup";
import { paginate } from "../../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: {}
  };

  componentDidMount() {
    const genres = [{ name: "ALL GENRES", _id: "" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    console.log("recreate movie", movie);
    // saveMovie(movie);
    this.setState({
      movies: movies
    });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log("handlePageChange", page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = path => {
    console.log(path);
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      console.log("Reverse");
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }

    this.setState({ sortColumn: sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => selectedGenre._id === m.genre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <p>Showing {filtered.length} movies in the database.</p>
            <MovieTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
