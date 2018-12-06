import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 1 },
      { id: 4, value: 3 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // key and value are the same, use this format
    console.log("Event habdler called", counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // the same one refer to counter state

    console.log(this.state.counters, counters);
    if (counters === this.state.counters)
      console.log("counters equals this.state.counters");
    else console.log("counters not equals this.state.counters");
    if (counters[0] === this.state.counters[0])
      console.log("counter[0] equals this.state.counter[0]");

    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // not the same one
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-small m2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} // use internally by react
            counter={counter} //counter itself
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
