"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const hours = [
  "5 AM",
  "8 AM",
  "11 AM",
  "2 PM",
  "5 PM",
  "8 PM",
  "11 PM",
  "2 AM",
];
const temperatures = [27, 19, 20, 25, 21, 29, 21, 21];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      min: 15,
      max: 35,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};

export function WeatherChart() {
  const data = {
    labels: hours,
    datasets: [
      {
        fill: true,
        data: temperatures,
        borderColor: "rgb(234, 179, 8)",
        backgroundColor: "rgba(234, 179, 8, 0.1)",
        pointBackgroundColor: "rgb(234, 179, 8)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  return <Line options={options} data={data} height={100} />;
}
