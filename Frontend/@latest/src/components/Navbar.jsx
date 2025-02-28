import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/users", {
          withCredentials: true, // Ensures cookies are sent with request
        });

        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="max-w-screen flex justify-between px-5 items-center bg-black min-h-[10vh] nav_grad">
      {/* Logo Section */}
      <div>
        <img src="/src/assets/logo.png" alt="Logo" width="200px" />
      </div>

      {/* Right Side - Authentication or Balance Display */}
      <div className="flex gap-10 items-center">
        {user ? (
          // If logged in, show balance
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
            Balance: ${user.balance.toFixed(2)}
          </div>
        ) : (
          // If not logged in, show login/signup
          <>
            <button className="hover:bg-gray-700 rounded-lg p-2">
              <Link to="/login">Log In</Link>
            </button>
            <button className="hover:bg-gray-700 rounded-lg p-2">
              <Link to="/signup">Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
