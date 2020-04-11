import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function BarGraph(props) {
    const { options } = props;

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        ></HighchartsReact>
    );
}

export default BarGraph;
