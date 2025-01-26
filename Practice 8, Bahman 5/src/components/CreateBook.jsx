import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/books", {
        title,
        author,
        publicationYear: parseInt(publicationYear),
        isbn,
      });
      alert("Book created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create book.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Add New Book
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Publication Year
          </label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            ISBN
          </label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button className="w-full bg-indigo-600 text-white text-lg py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
