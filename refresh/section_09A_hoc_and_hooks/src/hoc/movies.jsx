import React, { Component } from "react";
import withTooltip from "../common/hoc/withTooltip";
import { Tooltip } from "bootstrap";
import Button from "../common/components/button";

class Movies extends Component {
	btnToolTip = React.createRef();

	componentDidMount() {
		const toolTip = new Tooltip(this.btnToolTip.current.children[0]);
		this.toggleTooltip(toolTip);
	}

	toggleTooltip = (toolTip) => {
		const { showTooltip } = this.props;
		if (toolTip && showTooltip) {
			toolTip.show();
		}
	};

	render() {
		this.toggleTooltip();
		return (
			<div ref={this.btnToolTip} className="mt-5">
				<Button
					txtProp={"ToolTip"}
					classes={"secondary"}
					toolTipPosition={"bottom"}
					toolTipTitle={"Hey I am a tool!"}
					dataBsToggle={"tooltip"}
				></Button>

				<Button txtProp={"Save"} classes={"primary mx-5"}></Button>
			</div>
		);
	}
}

export default withTooltip(Movies);
