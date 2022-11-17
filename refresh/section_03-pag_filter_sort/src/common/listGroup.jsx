import React from "react";

const ListGroup = (props) => {
	const { collection, onItemSelect, valueProp, txtProp } = props;

	const toggleActiveClass = (current) => {
		collection
			.filter((el) => el != current)
			.forEach((item) => (item.isActive = false));
		current.isActive = true;
		return collection;
	};

	return (
		<ul className="list-group">
			{collection.map((item) => (
				<li
					key={item[valueProp]}
					onClick={() => onItemSelect(toggleActiveClass(item))}
					className={
						item.isActive ? "list-group-item active" : "list-group-item"
					}
				>
					{item[txtProp]}
				</li>
			))}
		</ul>
	);
};

export default ListGroup;
