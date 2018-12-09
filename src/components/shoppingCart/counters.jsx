import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button className="btn btn-primary btn-small m2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // use internally by react
            counter={counter} //counter itself
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
