import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-extrabold text-2xl hover:text-purple-200 transition duration-300"
        >
          Book App
        </Link>
        <div className="flex items-center space-x-6">
          {!token ? (
            <>
              <Link
                to="/register"
                className="text-lg hover:text-purple-200 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-lg hover:text-purple-200 transition duration-300"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-lg hover:text-purple-200 transition duration-300"
              >
                Books
              </Link>
              <Link
                to="/create"
                className="text-lg hover:text-purple-200 transition duration-300"
              >
                Add Book
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
