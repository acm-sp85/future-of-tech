import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {

  const data = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [
      {
        label: "Market Cap in Billions USD)",
        data: [0.1, 0.5, 0.8, 1, 1.2, 1.6], 
        backgroundColor: [
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
        ], 
        borderColor: [
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
        ], 
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#F3E3C1", 
          font: {
            size: 14, 
            family: "Arial", 
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#F3E3C1", 
          font: {
            size: 14, 
            family: "Arial", 
          },
        },
        grid: {
          display: false,
          color: "#2B7723", 
        },
        beginAtZero: true,
        title: {
          display: false,
          text: "Month",
        },
        border: {
          color: "#2B7723", 
        },
      },
      y: {
        ticks: {
          color: "#F3E3C1", 
          font: {
            size: 14, 
            family: "Arial", 
          },
        },
        grid: {
          display: false,
          color: "#2B7723", 
        },
        border: {
          color: "#2B7723", 
        },
        beginAtZero: true,
        title: {
          display: false,
          text: "Billions USD",
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutCubic",
    },
  };

  return (
    <div className="flex w-full items-center justify-center p-5 md:p-0 lg:h-[40vh]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
