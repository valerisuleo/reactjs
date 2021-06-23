import React, { Component } from "react";
import BootstrapCard from "../../../common/bootstrap-card/bootstrapCard";

class EducationCard extends Component {
    renderAside() {
        const { directory, path } = this.props;

        return (
            <div className="logo-frame">
                <img
                    src={require(`../../../../images/${directory}/${path}.jpg`)}
                    className="card-img"
                />
            </div>
        );
    }

    renderSection() {
        const {
            nameInstitute,
            educationLevel,
            field,
            when,
            where,
        } = this.props.item;
        return (
            <div className="card-body education">
                <h1 className="card-title">{nameInstitute}</h1>
                <p className="card-text">{educationLevel}</p>
                {where ? <p className="card-text">{where}</p> : null}
                <p className="card-text">{when}</p>
                <p className="card-text">{field}</p>
                <hr />
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

export default EducationCard;
