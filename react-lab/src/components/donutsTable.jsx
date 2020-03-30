import React, { Component } from "react";
import Table from "../common/table";
import state from "../state";

class DonutsTable extends Component {
    state = state;
    tableBody = [];

    columnsHeader = [
        {
            key: "flavor"
        },
        {
            key: "style"
        },
        {
            key: ""
        }
    ];

    getBtnClass(string) {
        let classes = "btn btn-sm ";
        let lowerCase = string.toLowerCase();
        classes += lowerCase === "delete" ? "btn-danger" : "btn-warning";
        return classes;
    }

    renderBtn(btnLabel, obj) {
        const { onDelete } = this.props;
        return (
            <button
                onClick={() => onDelete(obj)}
                className={this.getBtnClass(btnLabel)}>
                {btnLabel}
            </button>
        );
    }

    renderColumnsBody() {
        const { donuts } = this.props;

        return donuts.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.flavor}</td>
                    <td>{item.style}</td>
                    <td>{this.renderBtn("Delete", item)}</td>
                </tr>
            );
        });
    }

    render() {
        const { donuts, onSort } = this.props;
        
        return (
            <Table
                donuts={donuts}
                onSort={onSort}
                columnsHeader={this.columnsHeader}
                columnsBody={this.renderColumnsBody()}
            ></Table>
        );
    }
}

export default DonutsTable;
