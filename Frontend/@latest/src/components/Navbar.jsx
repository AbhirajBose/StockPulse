import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <div>
      <nav className="max-w-screen flex justify-around items-center bg-black min-h-[10vh] nav_grad">
        <div>
          <img src='./src/assets/logo.png' width="200px"></img>
        </div>

        <div className="logsign flex gap-10 items-center">
        <button className="hover:bg-gray-700 rounded-lg p-2"><Link to="/login">Log In</Link></button>
        <button className="hover:bg-gray-700 rounded-lg p-2"><Link to="/signup">Sign Up</Link></button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
