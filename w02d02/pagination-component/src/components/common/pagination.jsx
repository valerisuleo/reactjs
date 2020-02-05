import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    // console.log('itemsCount', itemsCount);
    // console.log('pageSize', pageSize);
    const pagesCount = Math.ceil(itemsCount / pageSize);
    
    const pages = _.range(1, pagesCount + 1);
    // if we have only one page btn we don't wanto to display: bad ux!
    if (pagesCount === 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page, i) => (
                    <li key={i} style={{ cursor: 'pointer' }} className={ page === currentPage ? "page-item active" : "page-item"}>
                        <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;
