import React, { Component } from "react";
import httpService from "../../../../services/httpService";
import config from "../../../../config.json";
import IndexList from "./indexList";

class SaberIndex extends Component {
    state = {
        data: {},
        sabers: [],
    };

    componentDidMount() {
        this.sabersIndex();
    }

    async sabersIndex() {
        const promise = httpService.get(config.saberAPI);
        const response = await promise;
        const { data } = response;
        this.setState({ sabers: data });
    }

    handleDelete = async (current) => {
        const sabers = [...this.state.sabers];
        const response = await httpService.delete(
            `${config.saberAPI}/${current.id}`
        );
        const filtered = sabers.filter(
            (elements) => elements.id !== current.id
        );
        this.setState({ sabers: filtered });
    };

    handleNavigation = (saber, e) => {
        const current = e.target;
        const endpoint =
            current.name === "view"
                ? `/sabers/${saber.id}`
                : `/sabers/${saber.id}/edit`;
        this.props.history.push(endpoint, saber);
    };

    render() {
        const { sabers } = this.state;
        return (
            <div className="row p-5 d-flex justify-content-center">
                <div className="col-lg-10">
                    <IndexList
                        collection={sabers}
                        onDelete={this.handleDelete}
                        onNavigate={this.handleNavigation}
                    ></IndexList>
                </div>
            </div>
        );
    }
}

export default SaberIndex;
