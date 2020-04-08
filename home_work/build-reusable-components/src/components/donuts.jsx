import React from "react";
import Form from "../common/form";
import DonutsTable from "./donutsTable";
import _ from "lodash";

class Donuts extends Form {
    state = {
        data: {
            style: "",
            flavor: ""
        },

        donuts: [
            { style: "Old Fashioned", flavor: "Chocolate" },
            { style: "Cake", flavor: "Coconut" },
            { style: "Yeast", flavor: "Frosted" },
            { style: "Glazed", flavor: "Plain" },
            { style: "Cruller", flavor: "Plain" },
            { style: "Cream", flavor: "Boston Creme" },
            { style: "Jelly", flavor: "Raspberry" },
            { style: "French Cruller", flavor: "Strawberry" },
            { style: "Fritter", flavor: "Apple" }
        ],
        arrOptions: []
    };

    componentDidMount() {
        const donuts = [...this.state.donuts];
        this.setState({ arrOptions: this.getOptions(donuts) });
    }

    doSubmit = e => {
        const donuts = [...this.state.donuts];
        const donutNew = { ...this.state.data };
        const cleanUp = { style: "", flavor: "" };

        if (!donutNew.style) {
            donutNew.style = "Cake";
        }

        donuts.unshift(donutNew);
        this.setState({ donuts, data: cleanUp });
    };

    handleDelete = obj => {
        const donuts = [...this.state.donuts];
        let index = donuts.indexOf(obj);
        donuts.splice(index, 1);
        this.setState({ donuts });
    };

    handleSort = current => {
        const { key } = current;
        const donuts = [...this.state.donuts];
        const sortedDonutsList = _.orderBy(
            donuts,
            [donut => donut[key].toLowerCase()],
            ["asc"]
        );
        this.setState({ donuts: sortedDonutsList });
    };

    render() {
        const { donuts, arrOptions } = this.state;

        return (
            <main className="container">
                <h1>React Donuts App: {donuts.length}</h1>

                <div className="row">
                    <div className="col-md-10 col-lg-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row" style={this.styles}>
                                <div className="col-4">
                                    {this.renderInput(
                                        "flavor",
                                        "What's your flavor?"
                                    )}
                                </div>
                                <div className="col-4">
                                    {this.renderSelect(
                                        "style",
                                        "What's your style?",
                                        arrOptions,
                                        this.selectDefaultValue("style", "Cake")
                                    )}
                                </div>
                                <div className="col-4 mt-3">
                                    {this.renderBtn("Add Donut")}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-10 col-lg-12">
                        <DonutsTable
                            donuts={donuts}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />
                    </div>
                </div>
            </main>
        );
    }

    styles = {
        display: "flex",
        alignItems: "center"
    };
}

export default Donuts;
