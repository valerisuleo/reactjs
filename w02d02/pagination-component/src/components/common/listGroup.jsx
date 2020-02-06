import React from "react";

const ListGroup = props => {
    console.log("props list-group", props);

    const { genres, textProperty, valueProperty, onGenreSelected, selectedGenre } = props;
    return (
        <ul className="list-group">
            {genres.map(item => (
                <li onClick={ () => onGenreSelected(item) } key={ item[valueProperty] } 
                className={ item === selectedGenre ? "list-group-item active" : "list-group-item" }>
                    { item[textProperty] }
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;
