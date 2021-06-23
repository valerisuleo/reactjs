import React from "react";

const BootstrapInput = (props) => {
    // console.log(props);

    const {label, name, onChange, value} = props;
    
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                className="form-control"
                onChange={onChange}
            />
        </div>
    );
};

export default BootstrapInput;
