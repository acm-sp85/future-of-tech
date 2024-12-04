import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components for Chart.js
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data and configuration for the pie chart
  const data = {
    labels: ["Using AI 87%", "Not using AI 13%"],
    datasets: [
      {
        label: "Sample Data",
        data: [87, 13], // Data for each slice (percentage or absolute numbers)
        backgroundColor: ["#282828", "#CD320C"], // Colors for each slice
        borderColor: ["#CD320C", "#CD320C", "#CD320C"], // Border colors for each slice
        borderWidth: 2, // Border width for each slice (in pixels)
        animateRotate: true, // Animate the rotation of the chart
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 10, // Increase padding to push the chart down
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#F3E3C1", // Blue color for legend labels
          font: {
            size: 14, // Font size for legend text
            family: "Arial", // Font family for legend text
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to be responsive
    animation: {
      duration: 2000, // Animation duration in milliseconds (2000ms = 2 seconds)
      easing: "easeInOutQuad", // Animation easing effect
    },
  };

  return (
    <div className="flex w-full items-center justify-center p-5 md:p-0 lg:h-[40vh]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
