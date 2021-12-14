import React from "react";
import CardTable from "../../../components/Cards/CardTable";

export default function CoinList() {
  const tableHeadName = ["Id", "Symbol", "Name", ""];
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
      <td className="border border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <a
          href={`/admin/coin/${data.id}`}
          className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full"
        >
          View
        </a>
      </td>
    </tr>
  );

  let list = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/list`,
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
          pageName="Coin List"
          list={list}
          tableHeadName={tableHeadName}
          tableBody={tableBody}
          perPage={20}
        />
      </div>
    </div>
  );
}
