import React, { Component } from "react";
import HooksCounter from "./hookCounter";
import HookInput from "./hookInput";
import FetchDataWithHooks from "./fetchDataWithHooks";

class ClassCounter extends Component {
	state = {
		count: 0,
	};

	increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};
	render() {
		return (
			<div>
				<h1>ClassCounter: {this.state.count}</h1>
				<button onClick={this.increaseCount} className="btn btn-primary">
					Increase
				</button>
                
                <HooksCounter></HooksCounter>
                <HookInput></HookInput>
                <FetchDataWithHooks></FetchDataWithHooks>
			</div>
		);
	}
}

export default ClassCounter;
