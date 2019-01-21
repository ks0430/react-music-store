import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import auth from './services/authService';
import { Redirect } from 'react-router-dom';

export default class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      // Call the server
      console.log("Submitted");
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // Need page full loaded
      const {state} = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if(ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }
    }
  };

  render() {
    if(auth.getCurrentUser()) return <Redirect to="/" />
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("Username", "username", "text")}
          {this.renderInput("Password", "password", "password")}
          {this.renderSubmit("Login")}
        </form>
      </div>
    );
  }
}
