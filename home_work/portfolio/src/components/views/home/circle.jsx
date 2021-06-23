import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Circle = (props) => {
    const { className, circle, isTransitionEnd, ...rest } = props;

    return (
        <React.Fragment>
            {isTransitionEnd ? (
                <Link to={`${circle.label.toLowerCase()}`}>
                    <div {...rest} className={className} />
                </Link>
            ) : (
                <div {...rest} className={className} />
            )}

            <span className="label">{circle.isActive && circle.isOpen && circle.label}</span>
        </React.Fragment>
    );
};

export default Circle;
