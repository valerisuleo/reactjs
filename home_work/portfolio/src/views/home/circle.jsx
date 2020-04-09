import React from "react";
import "./home.scss";

const Circle = (props) => {
    const { className, onClick, onMouseEnter, onMouseLeave, circle } = props;
    // console.log("circle", circle);

    return (
        <React.Fragment>
            {/* circle */}
            <div
                className={className}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
            {/* lable */}
            <span>
            {/* {circle.label} */}
            {(circle.isActive && circle.isOpen) && circle.label}
            </span>
        </React.Fragment>
    );
};

export default Circle;
