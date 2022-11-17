import "./App.css";
import Navbar from "./common/navbar";
import Counters from "./components/countersIndex";
import React, { Fragment, Component } from "react";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 1 },
			{ id: 3, value: 3 },
			{ id: 4, value: 0 },
		],
	};

	countersTotalValue() {
		const groupBy = this.state.counters.reduce((acc, current) => {
			return acc + current.value;
		}, 0);

		return groupBy;
	}

	handleDelete = (currentId) => {
		const counters = this.state.counters.filter(
			(item) => item.id !== currentId
		);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((item) => {
			return {
				id: item.id,
				value: 0,
			};
		});
		this.setState({ counters });
	};

	handleIncrement = (obj) => {
		const counters = [...this.state.counters];
		const current = counters.find((item) => item.id === obj.id);
		current.value = obj.value + 1;
		this.setState({ counters });
	};

    handleDecrement = (obj) => {
		const counters = [...this.state.counters];
		const current = counters.find((item) => item.id === obj.id);
		current.value = obj.value - 1;
		this.setState({ counters });
	};

	render() {
		return (
			<Fragment>
				<Navbar total={this.countersTotalValue()} />
				<main className="container">
					<Counters
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
						counters={this.state.counters}
					></Counters>
				</main>
			</Fragment>
		);
	}
}

export default App;
