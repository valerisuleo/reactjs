import React, { Fragment } from "react";
import _ from "lodash";

const BootstrapList = (props) => {
    const {
        collection,
        properties,
        orderByKey,
        btn,
        btnLabel,
        btnClass,
        onDelete
    } = props;

    const collectionOrdered = _.orderBy(collection, [orderByKey], ["asc"]);

    return (
        <ul className="list-group">
            {collectionOrdered.map((item, i) => (
                <li className="list-group-item" key={i}>
                    <Fragment>
                        {btn ? (
                            <button 
                                onClick={ () => onDelete(item) } 
                                className={`btn btn-${btnClass} btn-sm float-right`}>{btnLabel}
                            </button>
                            ) : 
                        null}
                    </Fragment>
                    {properties.map((propertyName, j) => (
                        <span className="d-flex bd-highlight" key={j}>{"" + item[propertyName]} </span>
                    ))}
                </li>
            ))}
        </ul>
    );
};

export default BootstrapList;
