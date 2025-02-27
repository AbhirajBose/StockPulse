import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/landing";


import Menubar from "./components/menubar";
import ForgotPasswordDropdown from "./components/setting";
import TrendingStocks from "./pages/homepage.jsx";
import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/home" element={<TrendingStocks/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
