import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import GenresList from "./genresList";
import { filterGenres } from "../../utils/filter";
import MoviePage from "./moviePage";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentGenre: {
      currentPage: 1,
      genre: {
        name: "ALL GENRES"
      }
    }
  };

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

  handleGenreChange = genre => {
    this.setState({ currentGenre: genre });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const { genres, currentGenre } = this.state;

    let movies = allMovies;
    if (currentGenre.name !== "ALL GENRES") {
      movies = filterGenres(currentGenre, allMovies);
    }
    console.log(movies);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <GenresList
              genres={genres}
              currentGenre={currentGenre}
              onGenreChange={this.handleGenreChange}
            />
          </div>
          <div className="col">
            <MoviePage
              movies={movies}
              pageSize={pageSize}
              currentPage={currentPage}
              handleLike={this.handleLike}
              handleDelete={this.handleDelete}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
