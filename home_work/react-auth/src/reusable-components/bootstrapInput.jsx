import React from "react";

const BootstrapInput = (props) => {
    const { name, label, type, value, onChange } = props;    

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                type={type}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

export default BootstrapInput;
