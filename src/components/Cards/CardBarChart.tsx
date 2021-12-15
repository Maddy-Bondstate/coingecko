import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

interface CardBarChartProps {
  label: Array<string>;
  data1: Array<number>;
  data2: Array<number>;
  data3: Array<number>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

export default function CardBarChart({
  label,
  data1,
  data2,
  data3,
}: CardBarChartProps) {
  const datas = {
    labels: label,
    datasets: [
      {
        label: `Today`,
        backgroundColor: "#ed64a6",
        borderColor: "#ed64a6",
        data: data1,
        fill: false,
        barThickness: 8,
      },
      {
        label: `Today High`,
        backgroundColor: "#555",
        borderColor: "#555",
        data: data2,
        fill: false,
        barThickness: 8,
      },
      {
        label: `Today Low`,
        backgroundColor: "#0ea5e9",
        borderColor: "#0ea5e9",
        data: data3,
        fill: false,
        barThickness: 8,
      },
    ],
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
              Market Data
            </h6>
            <h2 className="text-slate-700 text-xl font-semibold">
              Current Price
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <Bar options={options} data={datas} />
        </div>
      </div>
    </div>
  );
}
