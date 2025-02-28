import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";

const COINS = {
  BTC: { name: "Bitcoin", logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png" },
  ETH: { name: "Ethereum", logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png" },
  DOGE: { name: "Dogecoin", logo: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png" },
  SOL: { name: "Solana", logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png" },
  BNB: { name: "Binance Coin", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026" },
};

const Stocks = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const coin = COINS[symbol] || {};

  return (
    <div className="bg-black text-white min-h-screen p-5">
      <NavBar />
      
      <div className="flex items-center mb-5">
        <button className="bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 mt-[10px]" onClick={() => navigate(-1)}>
          ⬅ GO BACK
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-5">
        CryptoCompare Index {coin.name} ({symbol}) - USDT Historical Price
      </h1>

      <div className="bg-gray-900 p-5 rounded-lg mb-5">
        <img
          src="/src/assets/chart-placeholder.png"
          alt={`${coin.name} Chart`}
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center">
          <img src={coin.logo} alt={coin.name} className="w-24 h-24 rounded-full" />
          <h2 className="text-xl mt-2">{coin.name}</h2>
          <button className="bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-bold text-black">
            + Follow
          </button>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg flex-1">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">COIN</th>
                <th className="p-2">VALUATION</th>
                <th className="p-2">INDEX</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 flex items-center">
                  <span className="text-orange-400 text-lg">&#x20BF;</span> {coin.name}
                </td>
                <td className="p-2">
                  ₹ 84,302.05
                </td>
                <td className="p-2 text-red-500">-0.34%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <button className="bg-green-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-green-600">
          BUY
        </button>
        <button className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-red-600">
          SELL
        </button>
      </div>
    </div>
  );
};

export default Stocks;
