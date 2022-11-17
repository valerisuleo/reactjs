import React, { Component } from "react";
import Button from "../common/components/button";
import withRouter from "../common/hoc/withRouter";

class MovieShow extends Component {
	state = {};

	hadleClick = () => {
		console.log("fire");
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Movie #{this.props.location.state.movie.id.value}</h1>
				<Button
					onBtnClick={this.hadleClick}
					txtProp={"Save"}
					classes={"primary"}
				></Button>
			</div>
		);
	}
}

export default withRouter(MovieShow);
