import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch books.");
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul className="grid grid-cols-1 gap-4">
        {books.map((book) => (
          <li key={book._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Year: {book.publicationYear}</p>
            <Link to={`/books/${book._id}`} className="text-blue-500 underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
