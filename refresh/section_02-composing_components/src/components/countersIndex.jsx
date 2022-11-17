import React from "react";
import Counter from "../common/counter";

const Counters = (props) => {
	const { counters, onDelete, onIncrement, onDecrement, onReset } = props;

	return (
		<div>
			<p className="m-3">
				On the counters list we dispaly the reset btn
				<button onClick={onReset} className="btn btn-primary btn-sm ms-3">
					Reset
				</button>
			</p>

			{counters.map((item) => (
				<Counter
					key={item.id}
					onDelete={onDelete}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
					counter={item}
				></Counter>
			))}
		</div>
	);
};

export default Counters;
