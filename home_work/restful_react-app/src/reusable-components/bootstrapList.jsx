import React, { Fragment } from "react";

const BootstrapList = (props) => {
    const { listBody, propertyKey } = props;

    return (
        <ul className="list-group">
            {listBody.map((item, index) => (
                <li key={index} className="list-group-item">
                    {item[propertyKey]}
                </li>
            ))}
        </ul>
    );
};

export default BootstrapList;
