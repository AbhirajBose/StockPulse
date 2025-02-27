import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/landing";
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


      </Routes>
    </BrowserRouter>
  );
}

export default App;
