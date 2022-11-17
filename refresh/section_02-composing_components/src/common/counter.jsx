import React, { Component, Fragment } from "react";

class Counter extends Component {
	formatCounter = () => {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};

	getBadgeClass = () => {
		const { value } = this.props.counter;
		let classes = "badge m-2 ";

		classes += !value ? "bg-warning" : "bg-primary";
		return classes;
	};

	setBtnClass = (color, size) => {
		return `btn btn-${color} btn-${size}`;
	};

	render() {        
		return (
			<div>
				<div className="row">
					<div className="col-6">
						<div className="row">
							<div className="col-3">
								<span className={this.getBadgeClass()}>
									{this.formatCounter()}
								</span>
							</div>
							<div className="col-3">
								<button
									onClick={() => this.props.onIncrement(this.props.counter)}
									className={this.setBtnClass("secondary", "sm")}
								>
									+
								</button>
							</div>
							<div className="col-3">
								<button
									onClick={() => this.props.onDecrement(this.props.counter)}
									disabled={this.props.counter.value === 0}
									className={this.setBtnClass("secondary", "sm")}
								>
									-
								</button>
							</div>
							<div className="col-3">
								<button
									onClick={() => this.props.onDelete(this.props.counter.id)}
									className="btn btn-danger btn-sm ms-2"
								>
									x
								</button>
							</div>
						</div>
					</div>
					<div className="col-6"></div>
				</div>
			</div>
		);
	}
}

export default Counter;
