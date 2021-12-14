import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

export default function CardLineChart1({ data }: any) {
  let date: string = "";
  let label: any = [];
  let data1: any = [];
  let data2: any = [];
  let data3: any = [];
  //
  if (data && data?.market_caps) {
    data?.market_caps.map(
      (a: any) =>
        (date = `${new Date(a[0]).getDate()}/${
          new Date(a[0]).getMonth() + 1
        }/${new Date(a[0]).getFullYear()}`)
    );

    data?.market_caps.map((a: any) =>
      label.push(new Date(a[0]).getHours() + ":" + new Date(a[0]).getMinutes())
    );

    data?.market_caps.map((b: any) => data1.push(b[1]));

    data?.prices.map((c: any) => data2.push(c[1]));

    data?.total_volumes.map((d: any) => data3.push(d[1]));
  }

  const datas = {
    labels: label,
    datasets: [
      {
        label: `Market Caps`,
        backgroundColor: "#ed64a6",
        borderColor: "#ed64a6",
        data: data1,
        fill: false,
        barThickness: 8,
      },
      {
        label: `Prices`,
        backgroundColor: "#555",
        borderColor: "#555",
        data: data2,
        fill: false,
        barThickness: 8,
      },
      {
        label: `Total Volumes`,
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
              Market Chart
            </h6>
            <h2 className="text-slate-700 text-xl font-semibold">{date}</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <Line options={options} data={datas} />
        </div>
      </div>
    </div>
  );
}
