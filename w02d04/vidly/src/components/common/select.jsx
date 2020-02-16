import React from "react";

const Select = props => {

    const { arrayOfOptions, name, label, onChange, errors, value} = props;
    
    

    return (
        <div>
            <label htmlFor="genres">{label} Select</label>
            <select
                value={value}
                label={label}
                name={name}
                onChange={onChange}
                className="form-control">
                    
                {arrayOfOptions.map(item => (
                    <option key={item._id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
                    
            {errors ? (
                <div className="alert alert-danger" role="alert">
                    {errors}
                </div>
            ) : null}
        </div>
    );
};

export default Select;
