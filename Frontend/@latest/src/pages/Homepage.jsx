import React from "react";
import SidebarNavigation from "../components/menubar";
import NavBar from "../components/navbar";

const stocks = [
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "micro", symbol: "MSFT", change: "+0.09% (1.5)", value: "399.000" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "micro", symbol: "MSFT", change: "+0.09% (1.5)", value: "399.000" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "micro", symbol: "MSFT", change: "+0.09% (1.5)", value: "399.000" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
  { logo: "micro", symbol: "MSFT", change: "+0.09% (1.5)", value: "399.000" },
  { logo: "amazon", symbol: "AMZN", change: "+1.09% (2.21)", value: "214.845" },
];

const TrendingStocks = () => {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <div className="w-screen h-[calc(100vh-10vh)] flex overflow-hidden">
        {/* Sidebar taking a fixed width */}
        <SidebarNavigation className="w-64 bg-gray-900" />

        {/* Main content taking the remaining space */}
        <div className="flex-1 flex flex-col p-4 h-full overflow-hidden">
          <h1 className="text-2xl font-bold p-4 text-center">Trending Stocks</h1>

          {/* Grid container should take full width and prevent scrolling */}
          <div className="grid grid-cols-3 gap-4 w-full overflow-hidden">
            {stocks.map((stock, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-800 rounded-lg shadow-md cursor-pointer"
              >
                <img
                  src={`/${stock.logo}.png`}
                  alt={stock.symbol}
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-bold mr-2">{stock.symbol}</span>
                <span className="text-green-400 text-sm mr-2">{stock.change}</span>
                <span className="text-green-300 font-semibold">{stock.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingStocks;
