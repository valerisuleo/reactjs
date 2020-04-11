import React, { Component } from "react";
import BootstrapCard from "../../common/bootstrap-card/bootstrapCard";
import "./about.scss";
import BarGraph from "../../common/bar-graph/barGraph";

class BarSkillsCard extends Component {

    renderAside() {
        return (
            <div className='player-container'>
                <img
                src={require(`../../../images/about/player.gif`)}
                className="card-img player"
            />
            </div>
        );
    }

    renderSection() {
        const { options, waitForit } = this.props;
        return (
            <div className="card-body">
                <h1 className="card-title">Skills</h1>
                { waitForit ? <BarGraph options={options} /> : null}
            </div>
        );
    }

    render() {
        return (
            <BootstrapCard
                asideContent={this.renderAside()}
                sectionContent={this.renderSection()}
            />
        );
    }
}

export default BarSkillsCard;
