import React, { Component } from "react";
import ShoppingCart from "./components/shoppingCart";
import Movies from "./components/movies";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent: <Movies />,
      components: {
        ShoppingCart: <ShoppingCart />,
        Movies: <Movies />
      }
    };
  }

  handleComponentToggle = component => {
    this.setState({
      currentComponent: component
    });
  };

  classes = () => ({
    ul: {
      listStyleType: "none",
      padding: "1rem 5rem",
      backgroundColor: "rgb(250,250,250)",
      overflow: "hidden"
    },
    li: {
      float: "left",
      margin: "0 0.3rem"
    },
    container: {
      padding: "1rem 15rem"
    }
  });

  render() {
    const classes = this.classes();
    return (
      <React.Fragment>
        <ul style={classes.ul}>
          {Object.keys(this.state.components).map((key, i) => {
            return (
              <li key={key} style={classes.li}>
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    this.handleComponentToggle(this.state.components[key])
                  }
                >
                  {key}
                </button>
              </li>
            );
          })}
        </ul>

        <div style={classes.container}>{this.state.currentComponent}</div>
      </React.Fragment>
    );
  }
}

export default App;
