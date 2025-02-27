import NavBar from "./navbar";
import "../App";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function () {
  return (
    <div>
      <NavBar />
      <div className="flex h-[90vh] justify-center items-center">
        <div className="w-[60vw] bg-[rgb(30,30,30)] rounded-3xl gap-10 h-[60vh] items-center flex justify-center">
          <div className="graph w-[25vw] bg-[rgb(30,30,30)] h-[50vh]">
            <img src="./src/assets/Graph.png"></img>
          </div>
          <div className="signupblock w-[20vw] gap-5 flex flex-col">
            <h1 className="text-2xl">Sign In</h1>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                sx={{
                  "& label": { color: "gray" }, // Default label color
                  "& label.Mui-focused": { color: "gray" }, // Label color when focused
                  "& .MuiInputBase-input": { color: "white" }
                }}
                id="input-with-sx"
                label="Your name"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                sx={{
                  "& label": { color: "gray" }, // Default label color
                  "& label.Mui-focused": { color: "gray" }, // Label color when focused
                  "& .MuiInputBase-input": { color: "white" }
                }}
                label="Password"
                variant="standard"
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailOutlinedIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                sx={{
                  "& label": { color: "gray" }, // Default label color
                  "& label.Mui-focused": { color: "gray" }, // Label color when focused
                  "& .MuiInputBase-input": { color: "white" }
                }}
                label="Email"
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Person2OutlinedIcon sx={{ color: "#00B7AC", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                sx={{
                    "& label": { color: "gray" }, // Default label color
                    "& label.Mui-focused": { color: "gray" }, // Label color when focused
                    "& .MuiInputBase-input": { color: "white" }
                  }}
                label="Mobile Number"
                variant="standard"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
