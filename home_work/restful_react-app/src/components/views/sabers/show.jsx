import React, { Component } from "react";
import state from "../../../state";
import '../sabers/index/indexList.scss';

class SaberShow extends Component {
    state = state;

    render() {
        const { state: currentSaber } = this.props.location;
        return (
            <div className="card m-5">
                <div className="card-body">
                    <p>{currentSaber.name}</p>
                    <p className={currentSaber.lightsaber.toLowerCase()}>{currentSaber.lightsaber}</p>
                </div>
            </div>
        );
    }
}


export default SaberShow;
