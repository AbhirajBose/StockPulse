import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import "../App";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    const balance = 5000;
    const username = formData.email.split("@")[0];

    const payload = {
      username,
      email: formData.email,
      fullName: formData.fullName,
      password: formData.password,
      phone: formData.phone,
      balance
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        payload
      );
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error);
      alert("Registration failed! Check console for details.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-[90vh] justify-center items-center">
        <div className="w-[60vw] bg-[rgb(30,30,30)] rounded-3xl gap-10 h-[60vh] items-center flex justify-center">
          <div className="graph w-[25vw] h-[50vh]">
            <img src="./src/assets/Graph.png" alt="Graph" />
          </div>
          <div className="signupblock w-[20vw] gap-5 flex flex-col">
            <h1 className="text-2xl">Sign Up</h1>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                label="Full Name"
                name="fullName"
                variant="standard"
                value={formData.fullName}
                onChange={handleChange}
                sx={{
                  "& label": { color: "gray" },
                  "& label.Mui-focused": { color: "gray" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailOutlinedIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                label="Email"
                name="email"
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  "& label": { color: "gray" },
                  "& label.Mui-focused": { color: "gray" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="standard"
                value={formData.password}
                onChange={handleChange}
                sx={{
                  "& label": { color: "gray" },
                  "& label.Mui-focused": { color: "gray" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Person2OutlinedIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                label="Mobile Number"
                name="phone"
                variant="standard"
                value={formData.phone}
                onChange={handleChange}
                sx={{
                  "& label": { color: "gray" },
                  "& label.Mui-focused": { color: "gray" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#00B7AC", color: "white", mt: 2 }}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
