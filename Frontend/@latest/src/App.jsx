import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/landing";
import InvestmentDashboard from "./components/pie.jsx";
import Menubar from "./components/menubar";
import ForgotPasswordDropdown from "./components/setting";
import TrendingStocks from "./pages/homepage.jsx";
import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Stocks from "./pages/Stocks.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/home" element={<TrendingStocks/>}/>
        <Route path="/stocks" element={<Stocks />}/>
        <Route path="/stocks/:symbol" element={<Stocks />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
