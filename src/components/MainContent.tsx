import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 30, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Main() {
  return (
    <div className="w-[93.5%] bg-theme absolute left-[120px] top-[90px] h-[90%] rounded-tl-2xl">
      <div className="w-[30%] h-[30%] px-4">
        <div className="flex w-full">
          <h3 className="text-white text-lg text-center justify-around flex-row">
            Time Machine Detail
          </h3>
        </div>
        <Doughnut data={data} />;
      </div>
    </div>
  );
}
