import { config } from "../../services/config";

export default function Footer() {
  return (
    <footer className="block py-4">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-slate-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href={config.baseURL}
                className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
              >
                Coin Gecko
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
              <li>
                <a
                  href={`${config.baseURL}/coin`}
                  className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                >
                  Coin List
                </a>
              </li>
              <li>
                <a
                  href={`${config.baseURL}/coin/markets`}
                  className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                >
                  Coin Markets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
