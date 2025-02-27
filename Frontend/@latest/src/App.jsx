import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/landing";


import Menubar from "./components/menubar";
import ForgotPasswordDropdown from "./components/setting";
import Dashboard from "./components/dashboard";

import SignUp from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
