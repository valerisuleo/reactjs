import React, { Fragment, Component } from "react";
import BootstrapCards from "../../reusable-components/bootstrapCards";

class ShowCardStudent extends Component {
    
    renderHeader() {
        const { image, isEdit } = this.props;
        return (
            <Fragment>
                {!isEdit ? (
                    <img
                        className="card-img-top"
                        src={require(`../../images/${image}.jpg`)}
                        alt="Card image cap"
                    />
                ) : null}
            </Fragment>
        );
    }

    renderBody() {
        const { title, txt, isEdit, edit } = this.props;
        return (
            <Fragment>
                {!isEdit ? (
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{txt}</p>
                    </div>
                ) : (
                    <div>{edit.form}</div>
                )}
            </Fragment>
        );
    }

    renderFooter() {
        const { onEdit, isEdit } = this.props;
        return (
            <button onClick={() => onEdit()} className="btn btn-warning">
                <Fragment>{!isEdit ? "Edit" : "Back"}</Fragment>
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

export default ShowCardStudent;
