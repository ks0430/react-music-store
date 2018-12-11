import React, { Component } from "react";
import { ButtonSelection } from "./common/buttonSelection";
import ShoppingCart from "../../components/shoppingCart";
import Movies from "../../components/movies";
import RouterDemo from "../../components/router";

import { PopupSelection } from "./common/popupSelection";

export default class IndexSelection extends Component {
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
        <ButtonSelection
          components={components}
          onComponentChange={this.handleComponentToggle}
        />
        <div className="_container">{this.state.currentComponent}</div>
      </React.Fragment>
    );
  }
}
