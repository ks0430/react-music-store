import React, { Component } from "react";

export default class LoginForm extends Component {
  ref = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const value = this.ref.current.value;
    console.log("Submit", value);
  };

  //   componentDidMount() {
  //     this.ref.current.focus();
  //   }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.ref}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
