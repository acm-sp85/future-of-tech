import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";


Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Using AI 87%", "Not using AI 13%"],
    datasets: [
      {
        label: "Sample Data",
        data: [87, 13],
        backgroundColor: ["#282828", "#CD320C"],
        borderColor: ["#CD320C", "#CD320C", "#CD320C"],
        borderWidth: 2,
        animateRotate: true,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 10,
      },
    },
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
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="flex w-full items-center justify-center p-5 md:p-0 lg:h-[40vh]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
