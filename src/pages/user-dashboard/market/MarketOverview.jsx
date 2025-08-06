import Headbar from "../../../components/Headbar.jsx";
import PriceChart from "../../../components/PriceChart.jsx";
import MarketCard from "../../../components/market-cards/MarketCard.jsx";
import TokenValidation from "../../../utils/auth.jsx";
import Modal from "../../../components/Modals.jsx";

import { SideBarDesktop, SideBarMobile } from "../../../components/Sidebar.jsx";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MarketOverview() {
  const data = [
    { month: "Jan", income: 45, expense: 30 },
    { month: "Feb", income: 35, expense: 25 },
    { month: "Mar", income: 45, expense: 20 },
    { month: "Apr", income: 30, expense: 22 },
    { month: "May", income: 45, expense: 28 },
    { month: "Jun", income: 55, expense: 25 },
    { month: "Jul", income: 45, expense: 30 },
    { month: "Aug", income: 65, expense: 32 },
    { month: "Sep", income: 25, expense: 17 },
    { month: "Oct", income: 40, expense: 10 },
    { month: "Nov", income: 36, expense: 20 },
    { month: "Dec", income: 32, expense: 12 },
  ];

  const [currencies, setCurrencies] = useState([]);

  async function cryptoOverview() {
    try {
      const response = await fetch(
        "https://api-walletbits.82.29.170.171.nip.io/api/v1/crypto/get-market-overview"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Cannot get market data.");
      }

      return data;
    } catch (error) {
      console.error("Crypto overview error:", error.message);
    }
  }

  useEffect(() => {
    let didCancel = false;

    async function getData() {
      const res = await cryptoOverview();
      if (!didCancel && res) {
        console.log("Market Data:", res.data.topCurrencies);
        setCurrencies(res.data.topCurrencies);
      }
    }

    getData();

    return () => {
      didCancel = true;
    };
  }, []);

  const [chartMax, setChartMax] = useState(5);

  function handleViewAll() {
    if (chartMax <= 5) {
      setChartMax(currencies.length);
    } else {
      setChartMax(5);
    }
  }

  return (
    <>
      <SideBarMobile />
      <div className="flex bg-gray-100 gap-5 px-5 relative">
        <div className="h-screen w-1/5 py-5 sticky top-0">
          <SideBarDesktop />
        </div>

        <div className="flex flex-col gap-5 p-6 w-full">
          <Headbar header="Crypto Market Overview" />

          <div className="flex gap-2.5 items-center">
            <NavLink
              to="/market/market-overview"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#D470B7] rounded-lg py-2 px-4 text-white"
                  : "rounded-lg py-2 px-4"
              }
            >
              Market Overview
            </NavLink>
            <NavLink
              to="/market/converter"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#D470B7] rounded-lg py-2 px-4 text-white"
                  : "rounded-lg py-2 px-4"
              }
            >
              Converter
            </NavLink>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Top Cryptocurrencies</h3>
              <button
                onClick={handleViewAll}
                className="text-purple-600 hover:underline"
              >
                {chartMax <= 5 ? "View all" : "Collapse"}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="py-2 px-4">Asset</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">24h %</th>
                    <th className="py-2 px-4">Market Cap</th>
                    <th className="py-2 px-4">Volume</th>
                    <th className="py-2 px-4">Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.slice(0, chartMax).map((c, i) => {
                    const isPositive = c.price_change_percentage_24h > 0;
                    return (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="py-2 px-4">
                          <div className="flex items-center gap-2">
                            <img
                              src={c.image}
                              alt={c.name}
                              className="w-5 h-5 rounded-full"
                            />
                            <span>{c.name}</span>
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          ${c.current_price.toLocaleString()}
                        </td>
                        <td
                          className={`py-2 px-4 font-medium ${
                            isPositive ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {c.price_change_percentage_24h?.toFixed(2)}%
                        </td>
                        <td className="py-2 px-4">
                          ${c.market_cap.toLocaleString()}
                        </td>
                        <td className="py-2 px-4">
                          ${c.total_volume.toLocaleString()}
                        </td>
                        <td className="py-2 px-4">
                          {c.total_supply?.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full">
            <PriceChart
              gap={5}
              size={20}
              data={data}
              title="Bitcoin Price Chart"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketOverview;
