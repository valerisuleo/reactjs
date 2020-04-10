import React from "react";
import "./btnCustom.scss";

const BtnCustom = (props) => {
    const { endPoint } = props;
    
    return (
        <div>
            <a href="https://github.com/valeriorisuleo/Steal-My-Deck">
            {/* <a href={`https://github.com/valeriorisuleo/${endPoint}`}> */}
                <div className="button one">
                    <div className="insider"></div>
                    view project
                </div>
            </a>
        </div>
    );
};

export default BtnCustom;
