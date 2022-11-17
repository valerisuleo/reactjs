import React from "react";

const Button = (props) => {
	const {
		txtProp,
		classes,
		onBtnClick,
		toolTipPosition,
		toolTipTitle,
		dataBsToggle,
	} = props;
	return (
		<button
			onClick={onBtnClick}
			className={`btn btn-${classes}`}
			data-bs-toggle={dataBsToggle}
			data-bs-placement={toolTipPosition}
			title={toolTipTitle}
		>
			{txtProp}
		</button>
	);
};

export default Button;
