import React, { Component } from "react";
// Server
import {getMovies, deleteMovie} from './services/movieService';
import { getGenres } from './services/genreService';
import {toast} from 'react-toastify';

// Components
import Pagination from "./common/pagination";
import MovieTable from "./movieTable";
import ListGroup from "./common/listGroup";
import SearchBox from './common/searchBox';

// Utilities
import { paginate } from "./utils/paginate";
import _ from "lodash";
import { Link } from 'react-router-dom';


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
    sortColumn: {}
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ name: "ALL GENRES", _id: "" }, ...data];

    const{ data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    // saveMovie(movie);
    this.setState({
      movies: movies
    });
  };

  handleDelete = async movie => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    }
    catch(ex) {
      if(ex.response && ex.response.status === 404) {
        toast.error('This movie has already been deleted!');
      }
      this.setState({movies: originalMovies});
    }
  };

  handlePageChange = page => {
    console.log("handlePageChange", page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn: sortColumn });
  };

  getPageDate = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;

    const searched = 
      searchQuery 
      ? allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase())) 
      : allMovies;
    
    const filtered =
      selectedGenre && selectedGenre._id
      ? allMovies.filter(m => selectedGenre._id === m.genre._id)
      : allMovies;

    // In search mode, use search result, otherwise use filtered 
    const result = searchQuery ? searched : filtered;
    
    // Sort movies when states changed
    const sorted = _.orderBy(result, [sortColumn.path], [sortColumn.order]);

    // Paginate movies
    const movies = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: result.length,
      data: movies
    };
  };

  handleSearch = ({currentTarget}) => {
    const value = currentTarget.value;
    this.setState({ searchQuery:value, selectedGenre:null, currentPage:1 });
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movie } = this.getPageDate();

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
            {user && 
            (<Link
              className="btn btn-primary"
              style={{marginBottom: 20}}
              to="/movies/new"
            >
              New Movie
            </Link>
            )}
            <SearchBox 
              value={searchQuery}
              onChange={this.handleSearch}
            />
            <p>Showing {count} movies in the database.</p>
            <MovieTable
              movies={movie}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
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
