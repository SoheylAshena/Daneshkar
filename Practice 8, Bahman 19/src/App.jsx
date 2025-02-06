import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import Navbar from "./components/Navbar";
import UpdateBook from "./components/UpdateBook";
import react from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  const [searchQuery, setSearchQuery] = react.useState("");
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 transition-colors duration-500 dark:bg-gray-900">
        <Navbar query={{ searchQuery, setSearchQuery }} />
        <div className="container mx-auto p-4">
          <Routes>
            {/* Public */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Protected */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <BookList query={{ searchQuery, setSearchQuery }} />
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
            <Route
              path="/update/:id"
              element={
                <ProtectedRoute>
                  <UpdateBook />
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
