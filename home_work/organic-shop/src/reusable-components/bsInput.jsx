import React from "react";

const BootstrapInput = (props) => {
    const { name, type, onChange, label, value } = props;
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                name={name}
                type={type}
                className="form-control"
            />
        </div>
    );
};

export default BootstrapInput;
