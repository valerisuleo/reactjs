import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

class Donuts extends Component {
    state = {
        data: { style: "", flavor: "" },
        donuts: [],
        selectOptions: []
    };

    async componentDidMount() {
        this.donutsIndex();
    }

    donutsIndex = async () => {
        const response = await http.get(config.donutsAPI);
        const donuts = response.data;
        this.getOptions(donuts);
        this.setState({ donuts });
    };

    getOptions = array => {
        const selectOptions = [...array].map(item => {
            return {
                ...item
            };
        });
        this.setState({ selectOptions });
    };

    handleChange = e => {
        const data = { ...this.state.data };
        const current = e.target;
        data[current.name] = current.value;
        this.setState({ data });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const obj = this.state.data;
        const donuts = [...this.state.donuts];

        const response = await http.post(config.donutsAPI, obj);
        const donutNew = response.data;
        donuts.push(donutNew);

        this.setState({ donuts });
    };

    handleDelete = async donut => {
        const defaultDonuts = this.state.donuts;
        const donuts = [...this.state.donuts];

        // updating UI
        let donutIndex = donuts.indexOf(donut);
        donuts.splice(donutIndex, 1);
        this.setState({ donuts });

        // call server && error handling
        try {
            // const response = await http.delete("http://localhost:3000/donuts/cod"+ `/${donut.id}`); // simulate 404
            await http.delete(config.donutsAPI + `/${donut.id}`);
        } catch (error) {            
            if ( error.response && error.response.status === 404) {
                toast.error(`Not Found ${error.response.status}`);
            } 
            this.setState({ donuts: defaultDonuts });
        }
    };

    render() {
        const { donuts, selectOptions } = this.state;

        return (
            <main className="container">
                <ToastContainer></ToastContainer>
                <div className="row d-flex justify-content-center p-5">
                    <div className="col-6">
                        <h1>Donuts: {donuts.length}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="flavor">Flavor</label>
                                <input
                                    name="flavor"
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="style">Style</label>
                                <select
                                    className="form-control"
                                    name="style"
                                    onChange={this.handleChange}
                                >
                                    <option value=""></option>
                                    {selectOptions.map(item => (
                                        <option
                                            value={item.style}
                                            key={item.id}
                                        >
                                            {item.style}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </form>

                        <ul className="list-group">
                            {donuts.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <em className="mr-2">{item.flavor}</em>{" "}
                                    <strong>{item.style}</strong>{" "}
                                    <button
                                        onClick={() => this.handleDelete(item)}
                                        className="btn btn-danger btn-sm ml-5 float-right"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default Donuts;
