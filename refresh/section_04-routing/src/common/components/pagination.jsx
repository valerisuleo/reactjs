import React from "react";
import { range } from "lodash";

const BootstrapPagination = (props) => {
	const { collection, pageSize, currentPage, onPageChange } = props;

	const getNumberOfPages = () => {
		const numberOfPages = collection / pageSize;
		return range(1, numberOfPages + 1);
	};
	const pagination = (index) => {
		const current = index + 1;
		const start = current === 1 ? 0 : index * 4;
		const end = current * 4;
		return {
			start,
			end,
		};
	};
	return (
		<div>
			<nav aria-label="Page navigation example">
				<ul className="pagination">
					{getNumberOfPages().map((item, index) => (
						<li
							key={index}
							className={
								currentPage == index ? "page-item active" : "page-item"
							}
							onClick={() => onPageChange(index, pagination(index))}
						>
							<a className="page-link">{index + 1}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default BootstrapPagination;
