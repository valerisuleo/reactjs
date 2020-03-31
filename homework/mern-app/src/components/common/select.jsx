import React from "react";

const Select = props => {
    const { value, onChange, name, arrayOfOptions, label } = props;
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                value={value}
                name={name}
                onChange={onChange}
                className="form-control"
            >
                <option value=""></option>
                {arrayOfOptions.map(genre => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
