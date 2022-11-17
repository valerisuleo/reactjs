import React from "react";

const Alert = (props) => {
    const {txtProp, classes} = props
	return (
		<div className={`alert alert-${classes}`} role="alert">
			{txtProp}
		</div>
	);
};

export default Alert;
