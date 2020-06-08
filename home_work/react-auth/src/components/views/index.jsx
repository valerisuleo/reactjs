import React, { Component } from "react";
import http from '../../services/httpService';
import authService from '../../services/authService';
import config from '../../config.json';

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
        console.log(response);
    }
    
    render() {
        return (
            <div>
                <h1>Index</h1>
            </div>
        );
    }
}

export default StudentsIndex;
