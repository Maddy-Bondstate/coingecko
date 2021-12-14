import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardBarChart1 from "../../../components/Cards/CardBarChart1";
import CardLineChart1 from "../../../components/Cards/CardLineChart1";

export default function CoinMarketChart() {
  const params = useParams();

  let list = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    return await response.json();
  };

  const [state, setState] = useState<any>({
    data: {},
    loading: false,
  });

  useEffect(() => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    list().then((data: any) => {
      setState((s: any) => ({
        ...s,
        data,
        loading: false,
      }));
    });
  }, []);

  return (
    <div className="flex flex-wrap mt-4">
      <a
        href={`/admin/coin-markets`}
        className="animate-bounce bg-white text-blueGray-700 p-2 w-10 h-10 cursor-pointer ring-1 ring-gray-900/5 shadow-lg rounded-full flex items-center justify-center"
      >
        <i className="fas fa-arrow-left" />
      </a>
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="my-10 mb-16">
              {state?.data && <CardLineChart1 data={state.data} />}
            </div>
            <div className="my-10">
              {state?.data && <CardBarChart1 data={state.data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
