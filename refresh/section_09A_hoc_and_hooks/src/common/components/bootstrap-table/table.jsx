import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BootstrapTable = (props) => {
	const { cols, collection, onActionSelect, onEventEmitter, propKey, propValue } = props;

	const renderCellTxtContent = (index, col, element) => {
		let valueToDisplay;

		if (col.key == "actions") {
			valueToDisplay = element[col.key].value.map((item) => (
				<FontAwesomeIcon
					className="px-1"
					onClick={() => onActionSelect(element, item)}
					key={item.name}
					icon={item.icon}
					style={{ color: `${item.color}` }}
				/>
			));
			// handle nested obj...
		} else if (col.key === propKey) {
			valueToDisplay = element[col.key].value[propValue];
		} else {
			valueToDisplay = element[col.key].value;
		}
		return <td onClick={()=>onEventEmitter(col, element)} key={index}>{valueToDisplay}</td>;
	};
	return (
		<table className="table">
			<thead>
				<tr>
					{cols.map((col, i) => {
						return (
							<th scope="col" key={i}>
								{col.label}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{collection.map((element) => {
					return (
						<tr key={element.id.value}>
							{cols.map((col, index) =>
								renderCellTxtContent(index, col, element)
							)}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default BootstrapTable;
