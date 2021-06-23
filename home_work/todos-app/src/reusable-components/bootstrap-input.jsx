import React, { Fragment } from "react";

const BootstrapInput = (props) => {
    const { value, onChange, label, type, name } = props;

    return (
        <Fragment>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                className="form-control"
                placeholder="Enter todo"
                onChange={onChange}
                value={value}
                name={name}
            />
        </Fragment>
    );
};

export default BootstrapInput;
