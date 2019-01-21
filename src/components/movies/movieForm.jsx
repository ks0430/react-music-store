import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie, saveMovie } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";

export default class MovieDetail extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id:Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .label("Rate")
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    console.log("44",movieId);
    if(movieId === "new") return;

    const movie = getMovie(movieId);
    if(!movieId){ 
      console.log(movieId);
      return this.props.history.replace("/not-found");
    }

    // The data returns from Restful apis do not match every page. 
    // Create a mapToViewModel method to extract data from apis.
    this.setState({ data: this.mapToViewModel(movie) });
    console.log("56",this.state);
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }
  
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };


  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Title", "title", "text")}
          {this.renderSelect("Genre", "genreId", this.state.genres)}
          {this.renderInput("Number in stock", "numberInStock", "text")}
          {this.renderInput("Rate", "dailyRentalRate", "text")}
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}
