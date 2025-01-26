import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch books, please try again later.");
      }
    };

    fetchBooks();

    return () => {
      setBooks([]);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-extrabold text-center mb-10">Books</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book) => (
          <li
            key={book._id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {book.title}
            </h2>
            <p className="text-gray-600 mb-1">Author: {book.author}</p>
            <p className="text-gray-600 mb-4">Year: {book.publicationYear}</p>
            <div className="flex justify-between">
              <Link
                to={`/books/${book._id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
