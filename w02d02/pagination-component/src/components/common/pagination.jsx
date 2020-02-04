import React from "react";
import _ from "lodash";

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);
    // if we have only one page btn we don't wanto to display: bad ux!
    if (pagesCount === 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page, i) => (
                    <li className="page-item" key={i}>
                        <a className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
