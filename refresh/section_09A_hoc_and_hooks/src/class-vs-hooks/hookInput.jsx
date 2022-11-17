import React, { useState } from "react";

export default function HookInput() {
	const [name, setname] = useState("");
	return (
		<div>
			<h1>HookInput</h1>
            <p>Name: {name}</p>
			<input type="text" onChange={(e) => setname(e.target.value)} />
		</div>
	);
}
