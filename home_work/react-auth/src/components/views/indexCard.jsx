import React, { Component, Fragment } from "react";
import BootstrapCards from "../../reusable-components/bootstrapCards";

class BootstrapCardStudent extends Component {

    renderHeader() {
        const { image } = this.props;
        return (
            <Fragment>
                <img
                    className="card-img-top"
                    src={require(`../../images/${image}.jpg`)}
                    alt="Card image cap"
                />
            </Fragment>
        );
    }

    renderBody() {
        const { title, txt } = this.props;
        return (
            <Fragment>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{txt}</p>
            </Fragment>
        );
    }

    renderFooter() {
        const { onNavigateTo } = this.props;
        return (
            <button onClick={() => onNavigateTo()} className="btn btn-primary">
                Details
            </button>
        );
    }

    render() {
        return (
            <BootstrapCards
                header={this.renderHeader()}
                body={this.renderBody()}
                footer={this.renderFooter()}
            />
        );
    }
}

export default BootstrapCardStudent;
