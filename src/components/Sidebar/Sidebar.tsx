import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [collapseShow, setCollapseShow] = useState<String>("hidden");

  const active = "text-lightBlue-500 hover:text-lightBlue-600";
  const defaults = "text-blueGray-700 hover:text-blueGray-500";
  const activeIcon = "opacity-75";
  const defaultsIcon = "text-blueGray-400";

  const linkActive = (pathname: String, isIcon: Boolean, icon: String = "") => {
    return isIcon
      ? location.pathname === pathname
        ? `${activeIcon} ${icon}`
        : `${defaultsIcon} ${icon}`
      : location.pathname === pathname
      ? active
      : defaults;
  };

  const menu = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: "fa-tv",
    },
    {
      name: "Coin List",
      link: "/admin/coin-list",
      icon: "fa-table",
    },
    {
      name: "Coin Markets",
      link: "/admin/coin-markets",
      icon: "fa-table",
    },
  ];

  const projectName = () => (
    <Link
      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      to="/"
    >
      Coin Gecko
    </Link>
  );

  const collapseButton = (click: String, icon: String) => (
    <button
      type="button"
      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      onClick={() => setCollapseShow(click)}
    >
      <i className={`fas ${icon}`}></i>
    </button>
  );

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {(collapseButton("bg-white m-2 py-3 px-6", "fa-bars"), projectName())}

        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">{projectName()}</div>
              <div className="w-6/12 flex justify-end">
                {collapseButton("hidden", "fa-times")}
              </div>
            </div>
          </div>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {menu.map((m, i) => (
              <li className="items-center" key={i}>
                <Link
                  className={`text-xs uppercase py-3 font-bold block ${linkActive(
                    m.link,
                    false
                  )}`}
                  to={m.link}
                >
                  <i
                    className={`fas mr-2 text-sm ${linkActive(
                      m.link,
                      true,
                      m.icon
                    )}`}
                  ></i>
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
