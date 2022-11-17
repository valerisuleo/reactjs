import React, { useState } from "react";

export default function Search() {
	const [state, setState] = useState(null);
	const [value, setInputValue] = useState(null);
	return (
		<div>
			<div>
				<h1>Search</h1>
				<input type="text" onChange={(e) => setInputValue(e.target.value)} />
				<p>value: {value}</p>
			</div>
		</div>
	);
}
 