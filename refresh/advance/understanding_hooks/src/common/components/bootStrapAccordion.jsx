import React, { useState } from "react";

export default function BoorstrapAccordion(props) {
	const { collection } = props;
	const [items, setItems] = useState(collection);

	const toggleActiveClass = (current) => {
		const clone = [...items];
		clone
			.filter((el) => el != current)
			.forEach((item) => (item.isActive = false));
		current.isActive = true;
		setItems(clone);
	};

	return (
		<div className="accordion">
			{items.map((item, i) => (
				<div key={i} className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							aria-expanded="true"
							aria-controls="collapseOne"
							onClick={() => toggleActiveClass(item)}
						>
							{item.title}
						</button>
					</h2>
					<div
						className={
							item.isActive
								? "accordion-collapse collapse show"
								: "accordion-collapse collapse"
						}
					>
						<div className="accordion-body">{item.body}</div>
					</div>
				</div>
			))}
		</div>
	);
}
