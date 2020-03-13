import React, { Component } from "react";
import _ from "lodash";
import "../components/donuts.css";

class Donuts extends Component {
    state = {
        donutsList: [
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
        newDonut: { style: "", flavor: "" }
    };

    componentDidMount() {
        const sortedDonutsList = this.sort(this.state.donutsList);
        this.setState({ donutsList: sortedDonutsList });
    }
    
    sort(arr) {
        const sortedDonutsList = _.orderBy(
            arr,
            [donut => donut.style.toLowerCase()],
            ["asc"]
        );
        return sortedDonutsList;
    }

    handleChange = e => {
        const current = e.currentTarget;
        const newDonut = { ...this.state.newDonut };

        newDonut[current.name] = current.value;
        this.setState({ newDonut });
    };

    handleSubmit = e => {
        e.preventDefault();

        let donutsList = [...this.state.donutsList];
        const newDonut = { ...this.state.newDonut };
        donutsList.push(newDonut);
        donutsList = this.sort(donutsList);
        this.setState({ donutsList });
        this.state.newDonut.flavor = "";
    };

    handleDelete = donut => {
        const donutsList = [...this.state.donutsList];
        let index = donutsList.indexOf(donut);
        donutsList.splice(index, 1);
        this.setState({ donutsList });
    };

    render() {
        const { donutsList, newDonut } = this.state;
        return (
            <React.Fragment>
                <div className="body">
                    <h1>Total Donuts: {donutsList.length}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="flavor"
                            value={newDonut.flavor}
                            placeholder="What Type of Donut?"
                            onChange={this.handleChange}
                        />

                        <select name="style" onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="Old Fashioned">Old Fashioned</option>
                            <option value="Cake">Cake</option>
                            <option value="French Cruller">
                                French Cruller
                            </option>
                            <option value="Yeast">Yeast</option>
                        </select>

                        <input type="submit" value="Save My Donut" />
                    </form>

                    <ul>
                        {donutsList.map(donut => (
                            <li key={donut.style}>
                                {donut.style} - {donut.flavor}
                                <button
                                    onClick={() => this.handleDelete(donut)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Donuts;
