import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../../config.json";
import httpService from "../../../../services/httpService";
import BootstrapCard from "../../../../reusable-componets/bootstrapCard";

class Wonders extends Component {
    state = {
        wonders: [],
    };

    componentDidMount() {
        this.wondersIndex();
    }

    async wondersIndex() {
        const promise = httpService.get(config.wondersApi);
        const response = await promise;
        const { data } = response;
        this.setState({ wonders: data });
    }

    render() {
        const { wonders } = this.state;

        return (
            <div className="container">
                <h1>Welcome to a World Of Wonders!</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-9">
                        {wonders.map((wonder, i) => (
                            <Link to={`/wonders/${wonder.id}`}>
                                <BootstrapCard
                                    key={i}
                                    cardTitle={wonder.country}
                                    cardImage={wonder.image}
                                    cardTxt={wonder.name}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Wonders;
