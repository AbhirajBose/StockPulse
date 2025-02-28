import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/landing";
import InvestmentDashboard from "./components/pie.jsx";
import Menubar from "./components/menubar";
import TrendingStocks from "./components/homepage.jsx";
import Dashboard from "./components/dashboard";
import CustomPieChart from "./components/pie.jsx";
import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/homepage" element={<TrendingStocks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
