import React from "react";
import Like from "../common/like";


const MoviesTable = (props) => {
    const { filtered, onDelete, onLiked, onSort } = props;

    return (
        <table className="table text-center">
            <thead>
                <tr>
                    <th onClick={ () => onSort('title') } scope="col">Title</th>
                    <th onClick={ () => onSort('genre.name') } scope="col">Genre</th>
                    <th onClick={ () => onSort('numberInStock') } scope="col">Stock</th>
                    <th onClick={ () => onSort('dailyRentalRate') } scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {filtered.map(item => (
                    <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.genre.name}</td>
                        <td>{item.numberInStock}</td>
                        <td>{item.dailyRentalRate}</td>
                        <td>
                            <button
                                onClick={() => onDelete(item) }
                                className="btn btn-danger btn-sm">Delete
                            </button>
                        </td>
                        <td>
                        <Like onLiked={() => onLiked(item)} isLiked={item.isLiked}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;
