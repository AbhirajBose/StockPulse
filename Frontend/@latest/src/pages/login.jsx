import { useState } from "react";
import NavBar from "../components/navbar";
import "../App";
import { TextField, Button, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(formData);
    

    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/login", formData,   {
        withCredentials: true, // ✅ Ensures cookies are sent with the request
      });

      if (response.status === 200) {
        console.log("Login Successful", response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        window.location.href = "/home";
        alert("Login Successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex h-[90vh] justify-center items-center">
        <div className="w-[60vw] bg-[rgb(30,30,30)] rounded-3xl gap-10 h-[60vh] items-center flex justify-center">
          <div className="signupblock w-[20vw] gap-5 flex flex-col">
            <h1 className="text-2xl text-white">Sign In</h1>

            {error && <p className="text-red-500">{error}</p>}

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                sx={{ "& label": { color: "gray" }, "& .MuiInputBase-input": { color: "white" } }}
                label="Username or Email"
                name="email"
                variant="standard"
                value={formData.email}
                onChange={handleChange}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                sx={{ "& label": { color: "gray" }, "& .MuiInputBase-input": { color: "white" } }}
                label="Password"
                type="password"
                name="password"
                variant="standard"
                value={formData.password}
                onChange={handleChange}
              />
            </Box>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#00B7AC", color: "white", marginTop: "10px" }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
