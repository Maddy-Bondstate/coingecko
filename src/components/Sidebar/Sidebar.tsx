import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../services/const";
import { Menu } from "./Menu";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState<String>("hidden");

  const projectName = () => (
    <Link
      className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      to="/"
    >
      Coin Gecko
    </Link>
  );

  const collapseButton = (click: string, icon: string) => (
    <button
      type="button"
      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      onClick={() => setCollapseShow(click)}
    >
      <i className={`fas ${icon}`}></i>
    </button>
  );

  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-60 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {(collapseButton("bg-white m-2 py-3 px-6", "fa-bars"), projectName())}

        <div
          className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
        >
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">{projectName()}</div>
              <div className="w-6/12 flex justify-end">
                {collapseButton("hidden", "fa-times")}
              </div>
            </div>
          </div>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <Menu
              url={menu.dashboard.link}
              icon={menu.dashboard.icon}
              name={menu.dashboard.name}
            />
          </ul>

          <hr className="my-4 md:min-w-full text-slate-300" />

          <h6 className="md:min-w-full text-slate-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Coins
          </h6>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {menu.coin.map((m, i) => (
              <Menu key={i} url={m.link} icon={m.icon} name={m.name} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
