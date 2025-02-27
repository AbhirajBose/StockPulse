import React from "react";
import SidebarNavigation from "./menubar";
const stocks = [
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  {
    logo: "microsoft",
    symbol: "MSFT",
    change: "+0.09% (1.5)",
    value: "399.000",
  },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  {
    logo: "microsoft",
    symbol: "MSFT",
    change: "+0.09% (1.5)",
    value: "399.000",
  },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  {
    logo: "microsoft",
    symbol: "MSFT",
    change: "+0.09% (1.5)",
    value: "399.000",
  },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  {
    logo: "microsoft",
    symbol: "MSFT",
    change: "+0.09% (1.5)",
    value: "399.000",
  },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
];

const TrendingStocks = () => {
  return (
    <div className="w-[100vw] max-w-5xl gap-5 flex flex-row rounded-lg shadow-lg">
      <SidebarNavigation />
      <div className="">
        <h1 className="text-2xl font-bold p-4 text-center">Trending Stocks</h1>
        <div className="grid grid-cols-3 gap-4">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-800 rounded-lg shadow-md"
            >
              <img
                src={`/${stock.logo}.png`}
                alt={stock.symbol}
                className="w-8 h-8 mr-3"
              />
              <span className="text-white font-bold mr-2">{stock.symbol}</span>
              <span className="text-green-400 text-sm mr-2">
                {stock.change}
              </span>
              <span className="text-green-300 font-semibold">
                {stock.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingStocks;
