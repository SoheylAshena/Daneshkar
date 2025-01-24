import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import Navbar from "./components/Navbar";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <BookList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/books/:id"
              element={
                <ProtectedRoute>
                  <BookDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateBook />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
