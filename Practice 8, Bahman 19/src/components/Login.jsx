import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../api/BooksApiSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login({ username, password }).unwrap();
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-8 shadow-lg transition-all duration-300 dark:bg-gray-800">
      <h1 className="mb-6 text-center text-3xl font-extrabold text-gray-800 dark:text-gray-100">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-blue-600 py-3 text-lg text-white transition duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
