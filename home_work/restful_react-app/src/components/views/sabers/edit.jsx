import React from "react";
import BootstrapForm from "../../../reusable-components/bootstrapForm";
import httpService from "../../../services/httpService";
import config from "../../../config.json";

class SaberEdit extends BootstrapForm {
    state = {
        data: {lightsaber: "", name: "" }
    };

    componentDidMount() {
        this.setValueForm()
    }
    
    setValueForm() {
        const formObj = {...this.state.data};
        const { state: currentSaber } = this.props.location;

        formObj.name = currentSaber.name;
        formObj.lightsaber = currentSaber.lightsaber;

        this.setState({data: formObj});
    }

    async doSubmit(payload) {
        const { id } = this.props.location.state;
        const response = await httpService.put(`${config.saberAPI}/${id}`, payload);
        this.navigateTo('/sabers');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("jedi", "name")}
                {this.renderInput("color", "lightsaber")}
                {this.renderBtn("Save")}
            </form>
        );
    }
}

export default SaberEdit;
