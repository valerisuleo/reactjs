import React from "react";

const BootstrapCards = (props) => {
    const { header, body, footer } = props;
    return (
        <div className="card mb-3" style={{ width: "25rem" }}>
            <div className="header">{header}</div>
            <div className="card-body">{body}</div>
            <div className="card-footer">{footer}</div>
        </div>
    );
};

export default BootstrapCards;
