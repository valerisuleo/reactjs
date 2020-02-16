import React from "react";

const Input = props => {
    // console.log("Input", props);

    const { name, label, errors, ...rest } = props;
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                label={label}
                id={name}
                name={name}
                className="form-control"
            />

            {errors ?  (
                <div className="alert alert-danger" role="alert">
                    {errors}
                </div>
            ) : null}
        </div>
    );
};

export default Input;
