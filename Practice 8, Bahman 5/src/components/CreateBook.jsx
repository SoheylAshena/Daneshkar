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
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publication Year</label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ISBN</label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
