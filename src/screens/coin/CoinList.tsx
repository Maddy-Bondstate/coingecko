import CardTable from "../../components/Cards/CardTable";
import Badge from "../../components/UI/Badge/Badge";
import TableBody from "../../components/UI/Table/TableBody";

import { getData } from "../../services/fetch";

export default function CoinList() {
  const tableHeadName = ["Name", "Symbol", ""];
  const tableBody = (data: any) => (
    <tr key={data.id}>
      <TableBody name={data.name} />
      <TableBody name={data.symbol} />
      <TableBody>
        <a href={`/coin/${data.id}`}>
          <Badge name="View" />
        </a>
      </TableBody>
    </tr>
  );

  let list = async () => {
    return await getData(`coins/list`);
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
