import React, { Component } from "react";
import BootstrapForm from "../../../reusable-components/bootstrapForm";
import state from "../../../state";
import httpService from '../../../services/httpService';
import config from "../../../config.json";

class SaberNew extends BootstrapForm {
    state = {
        data: {lightsaber: "", name: "" }
    };

    async doSubmit(payload) {
        const response = await httpService.post(config.saberAPI, payload);
        this.navigateTo('/sabers');
    }

    render() {
        return (
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('jedi', 'name')}
                        {this.renderInput('color', 'lightsaber')}
                        {this.renderBtn('Add')}
                    </form>
                </div>
            </div>
        );
    }
}

export default SaberNew;
