import React, { Component, Fragment } from "react";
import config from "../../../../config.json"
import httpService from "../../../../services/httpService";
import "./worderShow.css";
import GMaps from "../../../maps";

class WonderShow extends Component {
    state = {
        wonder: {},
    };

    componentDidMount() {
        this.wonderShow();
    }

    async wonderShow() {
        const { id } = this.props.match.params;
        const promise = httpService.get(`${config.wondersApi}/${id}`);
        const response = await promise;
        const { data } = response;
        this.setState({ wonder: data });
    }

    render() {
        const { image, name, country, location } = this.state.wonder;

        return (
            <div>
                {location ? (
                    <Fragment>
                        <div
                            className="jumbotron jumbotron-fluid"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        <h1 className="display-3">{country}</h1>
                                        <p className="lead">{name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-9">
                                    <GMaps lat={location?.lat} lng={location?.lng}/>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : null}
            </div>
        );
    }
}

export default WonderShow;
