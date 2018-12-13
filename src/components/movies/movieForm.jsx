import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as server from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";

export default class MovieDetail extends Form {
  state = {
    data: {
      title: "",
      numberInStock: "",
      dailyRentalRate: "",
      genre: ""
    },
    errors: {},
    genres: null
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .label("Number in stock"),
    genre: Joi.string().required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .label("Rate")
  };

  doSubmit = () => {
    const newData = { ...this.state.data };
    const { id } = this.props.match.params;
    newData["_id"] = id;

    server.saveMovie(newData);

    this.props.history.push("/movies");
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const movie = id && server.getMovie(id);
      if (movie) {
        const data = {
          title: movie.title,
          numberInStock: movie.numberInStock,
          dailyRentalRate: movie.dailyRentalRate,
          genre: movie.genre.name
        };

        this.setState({ data });
      } else {
        this.props.history.replace("/not-found");
      }
    }

    const genres = [{ _id: "", name: "" }, ...getGenres()];

    this.setState({ genres });
  }

  render() {
    const { genres } = this.state;
    console.log(genres);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Movie Form</h1>
        {this.renderInput("Title", "title", "text")}
        {this.renderSelect("Genre", "genre", genres)}
        {this.renderInput("Number in stock", "numberInStock", "text")}
        {this.renderInput("Rate", "dailyRentalRate", "text")}
        {this.renderSubmit("Save")}
      </form>
    );
  }
}
