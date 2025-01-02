import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4 shadow-lg">
      <div className="container flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">سهیل آشنا</h1>
        <div className="flex w-32 justify-between font-bold">
          <Link
            to="/about-us"
            className="text-white transition duration-200 hover:text-indigo-300"
          >
            درباره ما
          </Link>
          <Link
            to="/"
            className="text-white transition duration-200 hover:text-indigo-300"
          >
            خانه
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
