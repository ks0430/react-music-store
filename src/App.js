import React, { Component } from "react";
import Movies from './components/movies'
import "./css/app.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Movies />
      </React.Fragment>
    );
  }
}

export default App;
