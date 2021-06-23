import React, { Component } from "react";

class RegularCounter extends Component {
    state = {
        count: 0,
    };

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div>
                <h1>RegularCounter</h1>
                <div>Count: {this.state.count}</div>
                <button onClick={this.increaseCount}>Increase</button>
            </div>
        );
    }
}

export default RegularCounter;
