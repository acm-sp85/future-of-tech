import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // Data configuration for the bar chart
  const data = {
    labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
    datasets: [
      {
        label: "Market Cap in Billions USD)",
        data: [0.1, 0.5, 0.8, 1, 1.2, 1.6], // Values for each bar
        backgroundColor: [
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
          "#282828",
        ], // Color for each bar
        borderColor: [
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
          "#67AADE",
        ], // Border color for each bar
        borderWidth: 1, // Border width of each bar
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
 
    plugins: {
      legend: {
        labels: {
          color: "#F3E3C1", // Custom color for legend text
          font: {
            size: 14, // Font size for legend text (optional)
            family: "Arial", // Font family for legend text (optional)
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#F3E3C1", // Blue color for X-axis tick labels
          font: {
            size: 14, // Font size for X-axis tick labels
            family: "Arial", // Font family for X-axis tick labels
          },
        },
        grid: {
          display: false,
          color: "#2B7723", // Grid line color
        },
        beginAtZero: true,
        title: {
          display: false,
          text: "Month",
        },
        border: {
          color: "#2B7723", // Red color for the x-axis border line
        },
      },
      y: {
        ticks: {
          color: "#F3E3C1", // Blue color for X-axis tick labels
          font: {
            size: 14, // Font size for X-axis tick labels
            family: "Arial", // Font family for X-axis tick labels
          },
        },
        grid: {
          display: false,
          color: "#2B7723", // Grid line color
        },
        border: {
          color: "#2B7723", // Red color for the x-axis border line
        },
        beginAtZero: true,
        title: {
          display: false,
          text: "Billions USD",
        },
      },
    },
    animation: {
      duration: 2000, // Duration of the animation in milliseconds
      easing: "easeInOutCubic", // Easing function for the animation
    },
  };

  return (
    <div className="flex w-full items-center justify-center p-5 md:p-0 lg:h-[40vh]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
