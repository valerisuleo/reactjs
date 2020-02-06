import React from "react";

const ListGroup = props => {
    const { genres, onChangedGenre } = props;
    console.log("props", props);

    return (
        <ul className="list-group">
            <ul>
                {genres.map(item => (
                    <li key={ item._id } 
                        className={ item.isActive ? "list-group-item active" : "list-group-item" } 
                        onClick={() => onChangedGenre(item)}>{ item.name }
                    </li>
                ))}
            </ul>
        </ul>
    );
};

export default ListGroup;
