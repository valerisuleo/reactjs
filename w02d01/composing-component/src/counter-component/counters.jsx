import React, { Component } from "react";
import CounterComponent from "./counter";

class CountersComponent extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(item => (
          <CounterComponent value={item.value} key={item.id} selected={true}>
            <h4>#{item.id}</h4>
          </CounterComponent>
        ))}
      </div>
    );
  }
}

export default CountersComponent;
