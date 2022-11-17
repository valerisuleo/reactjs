import React, { useState, useEffect } from "react";
import Button from "../common/components/button";
import useBrowserTitle from "./useBrowserTitle";

export default function HooksCounter(props) {
	const [count, setCount] = useState(0);

	useBrowserTitle(`You are a ${count}!`);
	return (
		<div>
			<div>
				<h1>HooksCounter: {count}</h1>
				<Button
					classes={"success"}
					txtProp={"Increase"}
					onBtnClick={() => setCount(count + 1)}
				></Button>
			</div>
		</div>
	);
}
