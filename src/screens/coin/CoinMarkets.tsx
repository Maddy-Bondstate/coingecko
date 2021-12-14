import { useState } from "react";
import Badge from "../../components/UI/Badge/Badge";
import CardTable from "../../components/Cards/CardTable";
import TableBody from "../../components/UI/Table/TableBody";
import { getData } from "../../services/fetch";

export default function CoinMarkets() {
  const [currencySymbol, setCurrencySymbol] = useState("$");

  const tableHeadName = ["Name", "Current Price", "High 24h", "Low 24h", ""];

  const tableBody = (data: any) => (
    <tr key={data.id}>
      <TableBody className="text-left flex items-center">
        <img
          src={data.image}
          className="h-7 w-7 bg-white rounded-full border"
          alt="..."
        />
        <span className="ml-3 font-bold text-slate-600">{data.name}</span>
      </TableBody>
      <TableBody name={`${currencySymbol} ${data.current_price}`} />
      <TableBody name={`${currencySymbol} ${data.high_24h}`} />
      <TableBody name={`${currencySymbol} ${data.low_24h}`} />
      <TableBody>
        <a href={`/coin/${data.id}/market-chart`}>
          <Badge name="View Chart" />
        </a>
      </TableBody>
    </tr>
  );

  let list = async (currency: string) => {
    return await getData(`coins/markets?vs_currency=${currency}`);
  };

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4 relative">
        <CardTable
          pageName="Coin Markets"
          list={list}
          tableHeadName={tableHeadName}
          tableBody={tableBody}
          perPage={10}
          setCurrencySymbol={setCurrencySymbol}
        />
      </div>
    </div>
  );
}
