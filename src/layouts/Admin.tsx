import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import FooterAdmin from "../components/Footers/FooterAdmin";
import HeaderStats from "../components/Headers/HeaderStats";
import NotFound from "../components/NotFound";

// screens
import Dashboard from "../screens/admin/Dashboard/Dashboard";
import CoinList from "../screens/admin/Coin/CoinList";
import CoinMarkets from "../screens/admin/Coin/CoinMarkets";
import CoinDetails from "../screens/admin/Coin/CoinDetails";
import CoinMarketChart from "../screens/admin/Coin/CoinMarketChart";

export default function Admin() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Fragment>
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/coin-list" element={<CoinList />} />
              <Route path="/admin/coin/:id" element={<CoinDetails />} />
              <Route
                path="/admin/coin/:id/market-chart"
                element={<CoinMarketChart />}
              />
              <Route path="/admin/coin-markets" element={<CoinMarkets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Fragment>
          <FooterAdmin />
        </div>
      </div>
    </BrowserRouter>
  );
}
