import React, { Component } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

class Items extends Component {
  render() {
    return (
      <div>
        <Line
          id="dowloadPNG"
          type="line"
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              {
                label: "Quantity",
                data: [47, 52, 67, 58, 9, 50],
                backgroundColor: "orange",
                borderColor: "red",
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            responsive: true,
            interaction: {
              mode: "index",
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
                text: "Chart.js Line Chart - Multi Axis",
              },
            },
            scales: {
              y: {
                type: "linear",
                display: true,
                position: "left",
              },
              y1: {
                type: "linear",
                display: true,
                position: "right",
                grid: {
                  drawOnChartArea: false,
                },
              },
            },
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Items;
