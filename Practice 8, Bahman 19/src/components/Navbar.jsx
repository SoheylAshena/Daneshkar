import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ query }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = query;

  const handleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
  }, [dark]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md transition-all duration-500 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          📚 BookApp
        </Link>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden w-2xl items-center rounded-full bg-gray-100 px-4 py-2 md:flex dark:bg-gray-800">
          <FaSearch className="text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent px-2 text-gray-700 focus:outline-none dark:text-gray-200"
          />
        </div>

        {/* Right - Desktop Menu & Theme Toggle */}
        <div className="hidden items-center space-x-6 lg:flex">
          {!token ? (
            <>
              <Link className="nav-link" to="/register">
                Register
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/">
                Books
              </Link>
              <Link className="nav-link" to="/create">
                Add Book
              </Link>
              <button onClick={handleLogout} className="btn-red">
                Logout
              </button>
            </>
          )}
          <button onClick={handleTheme} className="icon-btn">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="icon-btn lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md lg:hidden dark:bg-gray-900">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            {/* Mobile Search Bar */}
            <div className="flex w-full items-center rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-2 text-gray-700 focus:outline-none dark:text-gray-200"
              />
            </div>

            {!token ? (
              <>
                <Link
                  className="nav-link"
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Books
                </Link>
                <Link
                  className="nav-link"
                  to="/create"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Book
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="btn-red"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
