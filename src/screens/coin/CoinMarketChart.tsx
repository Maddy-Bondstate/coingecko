import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardBarCharts from "../../components/Cards/CardBarCharts";
import CardLineCharts from "../../components/Cards/CardLineCharts";
import Back from "../../components/UI/Back/Back";

import { getData } from "../../services/fetch";

export default function CoinMarketChart() {
  const params: any = useParams();

  const [state, setState] = useState<any>({
    data: {},
    loading: false,
  });

  useEffect(() => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    const list = async (id: string) => {
      return await getData(
        `coins/${id}/market_chart?vs_currency=usd&days=1`
      ).then((data: any) => {
        setState((s: any) => ({
          ...s,
          data,
          loading: false,
        }));
      });
    };

    list(params.id);
  }, [params]);

  return (
    <div className="flex flex-wrap mt-4">
      <Back to={`/coin-markets`} />
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="my-10 mb-16">
              {state?.data && <CardLineCharts data={state.data} />}
            </div>
            <div className="my-10">
              {state?.data && <CardBarCharts data={state.data} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
