import React, { Component, Fragment } from "react";

class Counter extends Component {
	state = {
		count: 0,
		// tags: [],
		tags: ["tag1", "tag2", "tag3"],
	};

	formatCounter = () => {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	};

	getBadgeClass = () => {
		const { count } = this.state;
		let classes = "badge m-2 ";

		classes += !count ? "bg-warning" : "bg-primary";
		return classes;
	};

	setBtnClass = (color, size) => {
		return `btn btn-${color} btn-${size}`;
	};

	renderTags = (tags) => {
		return (
			<ul>
				{tags.map((tag, i) => (
					<li key={i}>{tag}</li>
				))}
			</ul>
		);
	};

	handleClick = () => {
		const clone = { ...this.state };
		clone.count = clone.count + 1;
		this.setState(clone);
	};

	render() {
		const { tags } = this.state;

		return (
			<Fragment>
				<span className={this.getBadgeClass()}>{this.formatCounter()}</span>
				<button
					onClick={this.handleClick}
					className={this.setBtnClass("secondary", "sm")}
				>
					Increment
				</button>
				{tags.length ? (
					this.renderTags(tags)
				) : (
					<div className="alert alert-warning" role="alert">
						No Tags!
					</div>
				)}
			</Fragment>
		);
	}
}

export default Counter;
