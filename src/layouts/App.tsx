import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import FooterAdmin from "../components/Footers/FooterAdmin";
import HeaderStats from "../components/Headers/HeaderStats";
import PageNotFound from "../components/PageNotFound";

// screens
import Dashboard from "../screens/dashboard/Dashboard";
import CoinList from "../screens/coin/CoinList";
import CoinMarkets from "../screens/coin/CoinMarkets";
import CoinDetails from "../screens/coin/CoinDetails";
import CoinMarketChart from "../screens/coin/CoinMarketChart";

// styles
import "../assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="relative md:ml-60 bg-slate-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Fragment>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/coin/list" element={<CoinList />} />
              <Route path="/coin/:id" element={<CoinDetails />} />
              <Route
                path="/coin/:id/market-chart"
                element={<CoinMarketChart />}
              />
              <Route path="/coin/markets" element={<CoinMarkets />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Fragment>
          <FooterAdmin />
        </div>
      </div>
    </BrowserRouter>
  );
}
