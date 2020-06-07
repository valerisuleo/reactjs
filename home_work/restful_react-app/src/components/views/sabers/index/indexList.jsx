import React, { Component, Fragment } from "react";
import BootstrapList from "../../../../reusable-components/bootstrapList";
import state from "../../../../state";
import "./indexList.scss";


class IndexList extends Component {
    state = state;

    renderBtns(arg) {
        const { onDelete, onNavigate } = this.props;

        return (
            <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                <label className="btn btn-sm btn-outline-secondary">
                    <input onChange={(event) => onNavigate(arg, event)} type="radio" name="view" id="option1"/>{" "}
                    View
                </label>
                <label className="btn btn-sm btn-outline-secondary">
                    <input onChange={(event) => onNavigate(arg, event)} type="radio" name="edit" id="option2" /> Edit
                </label>
                <label className="btn btn-sm btn-outline-secondary">
                    <input onChange={() => onDelete(arg)} type="radio" name="delete" id="option3" /> Delete
                </label>
            </div>
        );
    }

    renderListBody() {
        const { collection } = this.props;

        if (collection) {
            const mapped = collection.map((obj, i) => {
                return {
                    saber: (
                        <Fragment>
                            <span className="m-0">
                                {`${obj.name}'s saber is`}{" "}
                                <span
                                    className={obj.lightsaber.toLowerCase()}
                                >{`${obj.lightsaber}`}</span>
                            </span>
                            {this.renderBtns(obj)}
                        </Fragment>
                    ),
                };
            });
            return mapped;
        }
    }

    render() {
        return (
            <BootstrapList
                listBody={this.renderListBody()}
                propertyKey={"saber"}
            ></BootstrapList>
        );
    }
}

export default IndexList;
