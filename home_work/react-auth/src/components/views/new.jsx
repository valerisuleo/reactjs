import React, { Component } from "react";
import BootstrapForm from "../../reusable-components/bootstrapForm";
import config from "../../config.json";
import http from "../../services/httpService";

class StudentNew extends BootstrapForm {
    state = {
        data: { name: "", linkedIn: "", gitHub: "", mostLikelyTo: "", nameImg: "" },
    };

    async createStudent() {
        const studentNew = { ...this.state.data };
        const promise = http.post(`${config.apiEndPoint}/students`, studentNew);
        const response = await promise;
        const { data } = response;
        this.setState({ data });
    }

    stringReplacer(name) {
        return name.replace(/\s/g, "").toLowerCase();
    }

    doSubmit() {
        this.createStudent();
        // MISSING REAL UPLOADING IMG SYSTEM...COMING SOON!
        // this.props.history.push('/students');
    }

    render() {
        return (
            <div className="row p-5">
                <div className="col-9">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("name", "Name", "text")}
                        {this.renderInput("linkedIn", "LinkedIn", "text")}
                        {this.renderInput("gitHub", "GitHub", "text")}
                        {this.renderInput("nameImg", "Image", "text")}
                        {this.renderInput(
                            "mostLikelyTo",
                            "Most Likely To",
                            "text"
                        )}
                        {this.renderBtn()}
                    </form>
                </div>
            </div>
        );
    }
}

export default StudentNew;
