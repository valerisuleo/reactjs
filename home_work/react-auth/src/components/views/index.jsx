import React, { Component, Fragment } from "react";
import http from "../../services/httpService";
import authService from "../../services/authService";
import config from "../../config.json";
import BootstrapCardStudent from "./indexCard";

class StudentsIndex extends Component {
    state = {
        data: {},
        students: [],
    };

    constructor(props) {
        super(props);
        authService.secureRoute(props.history);
    }

    componentDidMount() {
        this.getAll();
    }

    async getAll() {
        const promise = http.get(`${config.apiEndPoint}/students`);
        const response = await promise;
        const { data } = response;

        const addImgProperty = data.map((item) => {
            const image = item.nameImg.replace(/\s/g, "").toLowerCase();
            return {
                ...item,
                image,
            };
        });
        this.setState({ students: addImgProperty });
    }

    handleNavigation = (student) => {
        this.props.history.push(`/students/${student.id}`, student);
    };

    render() {
        const { students } = this.state;

        return (
            <div className="row p-5">
                <div className="col-md-12 col-lg-6 col-xl-6">
                    {students.map((item, i) => (
                        <Fragment key={i}>
                            {i % 2 == 0 ? (
                                <BootstrapCardStudent
                                    key={item.id}
                                    title={item.name}
                                    image={item.image}
                                    txt={item.mostLikelyTo}
                                    onNavigateTo={() =>
                                        this.handleNavigation(item)
                                    }
                                />
                            ) : null}
                        </Fragment>
                    ))}
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                    {students.map((item, i) => (
                        <Fragment key={i}>
                            {i % 2 != 0 ? (
                                <BootstrapCardStudent
                                    key={item.id}
                                    title={item.name}
                                    image={item.image}
                                    txt={item.mostLikelyTo}
                                    onNavigateTo={() =>
                                        this.handleNavigation(item)
                                    }
                                />
                            ) : null}
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

export default StudentsIndex;
