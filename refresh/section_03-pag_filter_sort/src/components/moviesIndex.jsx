import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { startCase } from "lodash";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import BootstrapPagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import BootstrapTable from "../common/bootstrap-table/table";
import createCell from "../common/bootstrap-table/utils";

class MoviesIndex extends Component {
	state = {
		movies: getMovies(),
		genres: getGenres(),
		cols: [],
		dataSource: [],
		originalSource: [],
		currentPage: 0,
	};

	componentDidMount() {
		this.getAll(0, 4);
	}

	getAll(start, end) {
		const result = this.state.movies.map((item) => {
			return {
				...item,
				actions: [
					{ color: "silver", name: "like", icon: faHeart },
					{ color: "orange", name: "delete", icon: faTrash },
				],
			};
		});
		const cols = Object.keys(result[0])
			.filter((item) => item !== "id")
			.map((key) => {
				return {
					label: key === "actions" ? "" : startCase(key),
					key,
				};
			});

		let dataSource = createCell(
			Object.keys(result[0]),
			result,
			this.setCellProperty
		);
		const originalSource = [...dataSource];

		dataSource = dataSource.slice(start, end);

		const genres = this.state.genres.map((obj) => ({
			...obj,
			isActive: false,
		}));

		const isAll = genres.find((item) => item._id == 1);
		if (!isAll) {
			genres.unshift({ _id: "1", name: "All", isActive: true });
		}
		this.setState({ cols, dataSource, genres, originalSource });
	}

	setCellProperty(tableCell, obj) {
		tableCell.actions.isValueShow = false;
		tableCell.actions.isIconShow = true;
	}

	handleAction = (current, action) => {
		const dataSource = [...this.state.dataSource];
		if (action.name === "delete") {
			const index = dataSource.indexOf(current);
			dataSource.splice(index, 1);
			this.setState({ dataSource });
		}
		if (action.name === "like") {
			const liked = dataSource.find(
				(item) => item.id.value === current.id.value
			);
			const action = liked.actions.value.find((item) => item.name == "like");
			action.color = "red";
			this.setState({ dataSource });
		}
	};

	handlePagination = (index, obj) => {
		this.getAll(obj.start, obj.end);
		this.setState({ currentPage: index });
	};

	handleSelection = (genres) => {
		const selectedGenre = genres.find((item) => item.isActive === true);
		let obj;

		if (selectedGenre && selectedGenre.name === "All") {
			obj = this.state.originalSource.slice(0, 4);
			this.setState({ genres, dataSource: obj, currentPage: 0 });
		} else {
			const dataSource = this.state.originalSource.filter(
				(item) => item.genre.value?.name === selectedGenre?.name
			);
			obj = dataSource;
			this.setState({ genres, dataSource: obj });
		}
	};

	render() {
		const { cols, dataSource, movies, genres } = this.state;
		return (
			<Fragment>
				<div className="row p-3">
					<aside className="col-4">
						<ListGroup
							collection={genres}
							onItemSelect={this.handleSelection}
							valueProp={"_id"}
							txtProp={"name"}
						></ListGroup>
					</aside>
					<section className="col-8">
						{dataSource.length ? (
							<BootstrapTable
								cols={cols}
								collection={dataSource}
                                propKey={'genre'}
                                propValue={'name'}
								onActionSelect={this.handleAction}
							></BootstrapTable>
						) : null}
					</section>
				</div>
				<BootstrapPagination
					pageSize={4}
					currentPage={this.state.currentPage}
					collection={movies.length}
					onPageChange={this.handlePagination}
				></BootstrapPagination>
			</Fragment>
		);
	}
}

export default MoviesIndex;
