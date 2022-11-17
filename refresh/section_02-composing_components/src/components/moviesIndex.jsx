import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import { startCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class MoviesIndex extends Component {
	state = {
		movies: getMovies(),
		cols: [],
		dataSource: [],
	};

	componentDidMount() {
		this.getAll();
	}

	getAll() {
		const { movies } = this.state;
		const result = movies.map((item) => {
			return {
				...item,
				action: [{ color: "orange", name: "delete", icon: faTrash }],
			};
		});
		const cols = Object.keys(result[0])
			.filter((item) => item !== "id")
			.map((key) => {
				return {
					label: startCase(key),
					key,
				};
			});

		const dataSource = this.createCell(Object.keys(result[0]), result);
		this.setState({ cols, dataSource });
	}

	renderTableHeader = (cols) => {
		return (
			<tr>
				{cols.map((col, i) => {
					return (
						<th scope="col" key={i}>
							{col.label}
						</th>
					);
				})}
			</tr>
		);
	};

	createCell(keys, data) {
		return data.map((obj) => {
			const cellObj = Object.assign({}, obj);
			keys.map((key) => {
				cellObj[key] = {
					className: "",
					value: obj[key],
					isValueShow: true,
					isIconShow: false,
					tooltip: false,
					icon: "",
					color: "",
				};
			});
			this.setCellProperty(cellObj, obj);
			return cellObj;
		});
	}

	setCellProperty(tableCell, obj) {
		tableCell.action.isValueShow = false;
		tableCell.action.isIconShow = true;
	}

	renderCellTxtContent(index, col, element) {
		let valueToDisplay;

		if (col.key == "action") {
			valueToDisplay = element[col.key].value.map((item) => (
				<FontAwesomeIcon
					onClick={() => this.handleAction(element, item)}
					key={item.name}
					icon={item.icon}
					style={{ color: `${item.color}` }}
				/>
			));
		} else if (col.key === "genre") {
			valueToDisplay = element[col.key].value.name;
		} else {
			valueToDisplay = element[col.key].value;
		}
		return <td key={index}>{valueToDisplay}</td>;
	}

	handleAction = (current, action) => {
		const { dataSource } = this.state;
		if (action.name === "delete") {
			const index = dataSource.indexOf(current);
			dataSource.splice(index, 1);
			this.setState({ dataSource });
		}
	};

	render() {
		const { cols, dataSource } = this.state;
		return (
			<Fragment>
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							{dataSource.length
								? `Showing ${dataSource.length} in the database`
								: "No movies left"}
						</a>
					</div>
				</nav>
				{dataSource.length ? (
					<table className="table">
						<thead>{this.renderTableHeader(cols)}</thead>
						<tbody>
							{dataSource.map((element) => {
								return (
									<tr key={element.id.value}>
										{cols.map((col, index) =>
											this.renderCellTxtContent(index, col, element)
										)}
									</tr>
								);
							})}
						</tbody>
					</table>
				) : null}
			</Fragment>
		);
	}
}

export default MoviesIndex;
