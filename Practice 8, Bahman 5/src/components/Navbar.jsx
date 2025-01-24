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
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">
          Book App
        </Link>
        <div>
          {!token ? (
            <>
              <Link to="/register" className="mr-4">
                Register
              </Link>
              <Link to="/login" className="mr-4">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="mr-4">
                Books
              </Link>
              <Link to="/create" className="mr-4">
                Add Book
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded"
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
