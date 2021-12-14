import { Console } from "console";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../assets/styles/index.css";

export default function CardTable({
  tableHeadName,
  tableBody,
  list,
  perPage,
  pageName,
}: any) {
  const tableHead = (name: string) => (
    <th
      key={name}
      className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
    >
      {name}
    </th>
  );

  const [state, setState] = useState<any>({
    data: [],
    loading: false,
  });

  const [pageCount, setPageCount] = useState(0);
  const [listOffset, setListOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

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

      if (data.length > 0) {
        const endOffset = listOffset + perPage;
        setCurrentItems(data.slice(listOffset, endOffset));
        setPageCount(Math.ceil(data.length / perPage));
      }
    });
  }, [listOffset, perPage]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * perPage) % state.data.length;
    setListOffset(newOffset);
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-blueGray-700">
              {pageName}
            </h3>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>{tableHeadName.map((n: string) => tableHead(n))}</tr>
          </thead>

          {console.log(state.data.length)}

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
          className="pagination"
        />
      </div>
    </div>
  );
}
