import React from "react";
import { Link } from "react-router";
import Logo from '../assets/Logo.png'

function Navbar() {
  return (
    <div className="bg-gray-950 shadow-md sticky top-0 z-50 rounded-b-xl">
      <div className=" flex items-center justify-around py-4">
        <div className="flex items-center gap-5">
        <img src={Logo} className="h-13"/>
        <Link
          to="/"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-500 to-blue-600"
        >
          Event Horizon
        </Link>
        </div>
        <div className="flex gap-15  nav-link text-gray-300 hover:text-white transition-colors duration-300 p-2  text-xl">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse Events</Link>
          <Link to="/submit">Submit Event</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
