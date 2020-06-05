import React, { Component } from "react";
import BootstrapCard from "../../common/bootstrap-card/bootstrapCard";
import BtnCustom from "../../common/btn-custom/btnCustom";

class ProjectsCard extends Component {

    renderAside() {
        const { cardTitle, cardText, github } = this.props;        
        
        return (
            <div className="card-body pr-5">
                <h1 className="card-title">{cardTitle}</h1>
                <hr />
                <p className="card-text mt-5">{cardText}</p>
                <div className="card-text">
                    <BtnCustom github={github} />
                </div>
            </div>
        );
    }

    renderSection() {
        const { imgName, directory } = this.props;

        return (
            <img
                src={require(`../../../images/${directory}/${imgName}.jpg`)}
                className="card-img"
            />
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

export default ProjectsCard;
