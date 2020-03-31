import React from "react";

const Table = props => {
    const { columnsHeader, columnsBody, onSort } = props;
    
    return (
        <table className="table">
            <thead>
                <tr>
                    {columnsHeader.map((item, i) => (
                        <th onClick={() => onSort(item)} key={i}>
                            {item.key.toUpperCase()}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{columnsBody}</tbody>
        </table>
    );
};

export default Table;


