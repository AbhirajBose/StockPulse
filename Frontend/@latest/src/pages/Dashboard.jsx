import SidebarNavigation from "../components/menubar.jsx";
import InvestmentDashboard from "../components/pie.jsx";
import NavBar from "../components/navbar.jsx";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const COINS = [
    { symbol: "BTC", name: "Bitcoin", logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png" },
    { symbol: "ETH", name: "Ethereum", logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png" },
    { symbol: "DOGE", name: "Dogecoin", logo: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png" },
    { symbol: "SOL", name: "Solana", logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png" },
    { symbol: "BNB", name: "Binance Coin", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026" },
  ];
  const [cryptoData, setCryptoData] = useState({});
  
    useEffect(() => {
      const ws = new WebSocket("wss://stream.binance.com:9443/ws");
  
      ws.onopen = () => {
        console.log("WebSocket Connected!");
        ws.send(JSON.stringify({ 
          method: "SUBSCRIBE",
          params: COINS.map((coin) => `${coin.symbol.toLowerCase()}usdt@ticker`),
          id: 1
        }));
      };
  
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.s && message.c) {
          setCryptoData((prevData) => ({
            ...prevData,
            [message.s.replace("USDT", "")]: {
              PRICE: parseFloat(message.c),
              CHANGEPCT24HOUR: parseFloat(message.P),
            },
          }));
        }
      };
  
      ws.onclose = () => {
        console.warn("WebSocket Disconnected.");
      };
  
      return () => {
        ws.close();
      };
    }, []);
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation className="h-full" />
        <div className="flex-1 overflow-auto">
          <InvestmentDashboard />
        </div>
      </div>
    </div>
  );
}
