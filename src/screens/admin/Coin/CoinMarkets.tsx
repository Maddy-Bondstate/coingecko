import React from "react";
import CardTable from "../../../components/Cards/CardTable";

export default function CoinMarkets() {
  const tableHeadName = ["Name", "Current Price", "High 24h", "Low 24h", ""];
  const tableBody = (data: any) => (
    <tr key={data.id}>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src={data.image}
          className="h-7 w-7 bg-white rounded-full border"
          alt="..."
        />
        <span className="ml-3 font-bold text-blueGray-600">{data.name}</span>
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        $ {data.current_price}
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        $ {data.high_24h}
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        $ {data.low_24h}
      </td>
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <a
          href={`/admin/coin/${data.id}/market-chart`}
          className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full"
        >
          View Chart
        </a>
      </td>
    </tr>
  );

  let list = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    return await response.json();
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <CardTable
          pageName="Coin Markets (USD)"
          list={list}
          tableHeadName={tableHeadName}
          tableBody={tableBody}
          perPage={10}
        />
      </div>
    </div>
  );
}
