import React from "react";
import "./btnCustom.scss";

const BtnCustom = (props) => {
    const { github } = props;
    
    
    return (
        <div>
            <a href={`https://github.com/valeriorisuleo/${github}`}>
                <div className="button one">
                    <div className="insider"></div>
                    view project
                </div>
            </a>
        </div>
    );
};

export default BtnCustom;
