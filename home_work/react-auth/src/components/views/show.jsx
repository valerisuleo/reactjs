import React, { Component, Fragment } from "react";
import config from "../../config.json";
import http from "../../services/httpService";
import authService from "../../services/authService";
import ShowCardStudent from "./showCard";
import BootstrapForm from "../../reusable-components/bootstrapForm";

class StudentShow extends BootstrapForm {
    state = {
        data: { name: "", linkedIn: "", gitHub: "", mostLikelyTo: "" },
        student: {},
    };


    constructor(props) {
        super(props);
        authService.secureRoute(props.history);
    }

    componentDidMount() {
        this.getStudent();
        this.setFormValue();
    }

    getStudent() {
        const student = { ...this.state.student };
        const {
            name,
            linkedIn,
            gitHub,
            mostLikelyTo,
            image,
        } = this.props.location.state;
        student.name = name;
        student.linkedIn = linkedIn;
        student.mostLikelyTo = mostLikelyTo;
        student.gitHub = gitHub;
        student.image = image;
        this.setState({ student });
    }

    setFormValue() {
        const formObj = { ...this.state.data };
        const {
            name,
            mostLikelyTo,
            linkedIn,
            gitHub,
        } = this.props.location.state;

        formObj.name = name;
        formObj.mostLikelyTo = mostLikelyTo;
        formObj.linkedIn = linkedIn;
        formObj.gitHub = gitHub;

        this.setState({ data: formObj });
    }

    async updateStudent() {
        const { id, image } = this.props.location.state;
        const promise = http.put(
            `${config.apiEndPoint}/students/${id}`,
            this.state.data
        );
        const response = await promise;
        const studentUpdated = response.data;
        studentUpdated.image = image;
        this.setState({ student: studentUpdated });
    }

    doSubmit() {
        this.updateStudent();
        this.setState({isEdit: false})
    }

    toggleBtn = () => {
        this.setState((currentValue) => ({
            isEdit: !currentValue.isEdit,
        }));
    };

    renderForm = () => {
        return {
            form: (
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Student Name", "text")}
                    {this.renderInput("mostLikelyTo", "Most Likely To", "text")}
                    {this.renderBtn()}
                </form>
            ),
        };
    };

    render() {
        const { isEdit, student } = this.state;

        return (
            <div className="row p-5 d-flex justify-content-center">
                <div className="col-xl-9">
                    <Fragment>
                        {student.image ? (
                            <ShowCardStudent
                                onEdit={this.toggleBtn}
                                image={student.image}
                                title={student.name}
                                txt={student.mostLikelyTo}
                                isEdit={isEdit}
                                edit={this.renderForm()}
                            />
                        ) : null}
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default StudentShow;
