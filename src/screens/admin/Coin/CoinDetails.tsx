import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardBarChart from "../../../components/Cards/CardBarChart";
import CardLineChart from "../../../components/Cards/CardLineChart";

export default function CoinDetails() {
  const params = useParams();

  const tableHeadName = ["Id", "Symbol", "Name"];
  const tableBody = (data: any) => (
    <tr key={data.id}>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {data.id}
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {data.symbol}
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {data.name}
      </td>
    </tr>
  );

  let list = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.id}`,
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
      console.log(data);
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
        href={`/admin/coin-list`}
        className="animate-bounce bg-white text-slate-700 p-2 w-10 h-10 cursor-pointer ring-1 ring-gray-900/5 shadow-lg rounded-full flex items-center justify-center"
      >
        <i className="fas fa-arrow-left" />
      </a>
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative w-36">
                  <img
                    alt="..."
                    src={state.data.image?.large}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -mt-16"
                  />
                </div>
              </div>
              <div className="mt-28">
                <span className="relative inline-flex">
                  <a
                    href={`/admin/coin/${state.data.id}/market-chart`}
                    className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white transition ease-in-out duration-150 ring-1 ring-gray-900/10"
                  >
                    View Coin Market Chart
                  </a>
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </span>
              </div>
              <div className="w-full px-4 text-center mt-5 mb-5">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.coingecko_rank}
                    </span>
                    <span className="text-sm text-slate-400">
                      Coingecko Rank
                    </span>
                  </div>
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.coingecko_score}
                    </span>
                    <span className="text-sm text-slate-400">
                      Coingecko Score
                    </span>
                  </div>
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.community_score}
                    </span>
                    <span className="text-sm text-slate-400">
                      Community Score
                    </span>
                  </div>
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.developer_score}
                    </span>
                    <span className="text-sm text-slate-400">
                      Developer Score
                    </span>
                  </div>
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.liquidity_score}
                    </span>
                    <span className="text-sm text-slate-400">
                      Liquidity Score
                    </span>
                  </div>
                  <div className="mx-2 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                      {state.data.public_interest_score}
                    </span>
                    <span className="text-sm text-slate-400">
                      Public Interest Score
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                {state.data?.market_data?.current_price && (
                  <CardLineChart
                    label={Object.keys(state.data?.market_data?.current_price)}
                    data1={Object.values(
                      state.data?.market_data?.current_price
                    )}
                    data2={Object.values(state.data?.market_data?.high_24h)}
                    data3={Object.values(state.data?.market_data?.low_24h)}
                  />
                )}
              </div>
              <div className="w-full xl:w-6/12 px-4">
                {state.data?.market_data?.current_price && (
                  <CardBarChart
                    label={Object.keys(state.data?.market_data?.current_price)}
                    data1={Object.values(
                      state.data?.market_data?.current_price
                    )}
                    data2={Object.values(state.data?.market_data?.high_24h)}
                    data3={Object.values(state.data?.market_data?.low_24h)}
                  />
                )}
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                {state.data.name}
              </h3>
              <div className="mb-2 text-sm leading-normal text-slate-500 font-bold uppercase">
                Symbol: <b>{state.data.symbol}</b>
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-briefcase mr-2 text-lg text-slate-400"></i>{" "}
                Categories: {state.data?.categories?.join(", ")}
              </div>
              <div className="mb-2 text-sm leading-normal text-slate-600 font-bold uppercase mt-10">
                Community
              </div>
              <div className="mb-2 text-slate-600">
                {state.data.links?.chat_url?.map((x: any, i: number) => (
                  <a
                    key={i}
                    className="text-sky-500 hover:text-sky-600 mr-4"
                    href={x}
                  >
                    {x}
                  </a>
                ))}
              </div>

              <div className="mb-2 text-sm leading-normal text-slate-600 font-bold uppercase mt-10">
                Website
              </div>
              <div className="mb-2 text-slate-600">
                {state.data.links?.homepage?.map((z: any, j: number) => (
                  <a
                    key={j}
                    className="text-sky-500 hover:text-sky-600 mr-4"
                    href={z}
                  >
                    {z}
                  </a>
                ))}
              </div>

              <div className="mb-2 text-sm leading-normal text-slate-600 font-bold uppercase mt-10">
                Facebook:
                <a
                  className="ml-4 text-sky-500 hover:text-sky-600 mr-4"
                  href={`https://www.facebook.com/${state.data.links?.facebook_username}`}
                >
                  {state.data.links?.facebook_username}
                </a>
              </div>

              <div className="mb-2 text-sm leading-normal text-slate-600 font-bold uppercase mt-5">
                Twitter:
                <a
                  className="ml-4 text-sky-500 hover:text-sky-600 mr-4"
                  href={`https://twitter.com/${state.data.links?.twitter_screen_name}`}
                >
                  {state.data.links?.twitter_screen_name}
                </a>
              </div>
            </div>

            <div className="mt-10 py-10 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  {" "}
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-slate-700">
                    Tickers
                  </h3>
                  {state?.data?.tickers?.map((b: any, u: number) => (
                    <div
                      key={u}
                      className="mt-4 mb-4 text-lg leading-relaxed text-slate-700"
                    >
                      <p>
                        bid_ask_spread_percentage: {b.bid_ask_spread_percentage}
                      </p>
                      <p>market: {b.market.name}</p>
                      <p>trust score: {b.trust_score}</p>
                      <p>Volume: {b.volume}</p>
                      <p>
                        trade url:{" "}
                        <a
                          className="text-sky-500 hover:text-sky-600"
                          href={b.trade_url}
                        >
                          {b.trade_url}
                        </a>
                      </p>
                      <hr className="py-2 mt-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
