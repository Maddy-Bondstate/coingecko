import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../assets/styles/pagination.css";
import TableHead from "../UI/Table/TableHead";

export default function CardTable({
  tableHeadName,
  tableBody,
  list,
  perPage,
  pageName,
  setCurrencySymbol,
}: any) {
  const tableHead = (name: string) => <TableHead key={name} name={name} />;

  const [state, setState] = useState<any>({
    data: [],
    loading: false,
  });

  const [pageCount, setPageCount] = useState(0);
  const [listOffset, setListOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    initialStart(currency);
  }, [listOffset, perPage]);

  const initialStart = async (curr: string) => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    await list(curr).then((data: any) => {
      setState((s: any) => ({
        ...s,
        data,
        loading: false,
      }));

      if (data.length > 0) {
        handleSearch(search, data, false);
      }
    });
  };

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * perPage) % state.data.length;
    setListOffset(newOffset);
  };

  const handleSearch = (name: string, data: any, resetOffset: boolean) => {
    setSearch(name);
    if (resetOffset) setListOffset(0);

    let bbb = data.filter((d: any) =>
      d.name.toLowerCase().includes(name.toLowerCase())
    );

    const endOffset = listOffset + perPage;
    setCurrentItems(bbb.slice(listOffset, endOffset));
    setPageCount(Math.ceil(bbb.length / perPage));
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-slate-700">{pageName}</h3>
          </div>
          <div className="flex items-center">
            {setCurrencySymbol && (
              <select
                value={currency}
                className="border mr-4 outline-0 px-2 py-1 focus:ring-indigo-500 focus:border-indigo-600 shadow-sm sm:text-sm border-gray-500 rounded-md"
                onChange={(e: any) => {
                  return (
                    setCurrency(e.target.value),
                    setCurrencySymbol(
                      e.target.childNodes[e.target.selectedIndex].getAttribute(
                        "data-symbol"
                      )
                    ),
                    initialStart(e.target.value)
                  );
                }}
              >
                <option data-symbol="$" value="usd">
                  USD
                </option>
                <option data-symbol="€" value="eur">
                  EUR
                </option>
              </select>
            )}
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value, state.data, true)}
              value={search}
              placeholder="search name"
              className="border outline-0 px-2 py-1 focus:ring-indigo-500 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md "
            />
            {search !== "" && (
              <span
                onClick={() => handleSearch("", state.data, true)}
                className="ml-2 cursor-pointer inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-500 hover:bg-red-400 tracking-wide rounded-full"
              >
                Clear
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>{tableHeadName.map((n: string) => tableHead(n))}</tr>
          </thead>

          <tbody>
            {state.loading
              ? [...Array(5)].map((x, i) => (
                  <tr key={i}>
                    {[...Array(tableHeadName.length)].map((y, j) => (
                      <td
                        key={j}
                        className="animate-pulse border h-5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "
                      >
                        <div className="h-5 bg-gray-200 rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))
              : currentItems.length > 0 &&
                currentItems.map((d: any) => tableBody(d))}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          forcePage={listOffset === 0 ? 0 : listOffset / perPage}
          className="pagination"
        />
      </div>
    </div>
  );
}
