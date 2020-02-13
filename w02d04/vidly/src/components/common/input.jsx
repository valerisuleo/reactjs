import React from "react";

const Input = props => {
    // console.log("Input", props);

    const { name, label, value, onChange, errors } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                label={label}
                type="text"
                className="form-control"
            />

            {errors && value === "" ? (
                <div className="alert alert-danger" role="alert">
                    {errors}
                </div>
            ) : null}
        </div>
    );
};

export default Input;
