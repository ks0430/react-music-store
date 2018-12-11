import React, { Component } from "react";
import ShoppingCart from "./components/shoppingCart";
import Movies from "./components/movies";
import RouterDemo from "./components/router";

import "./css/app.css";
class App extends Component {
  state = {
    currentComponent: <Movies />
  };

  components = {
    ShoppingCart: <ShoppingCart />,
    Movies: <Movies />,
    Router: <RouterDemo />
  };

  handleComponentToggle = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const components = this.components;
    return (
      <React.Fragment>
        <div className="appStyle">
          <ul>
            {Object.keys(components).map(key => {
              return (
                <li key={key}>
                  <button
                    className="btn btn-dark"
                    onClick={() => this.handleComponentToggle(components[key])}
                  >
                    {key}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="_container">{this.state.currentComponent}</div>
      </React.Fragment>
    );
  }
}

export default App;
