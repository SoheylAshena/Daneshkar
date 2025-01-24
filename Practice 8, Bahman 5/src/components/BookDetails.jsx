import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch book details.");
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${id}`);
      alert("Book deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to delete book.");
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">Publication Year: {book.publicationYear}</p>
      <p className="text-gray-700">ISBN: {book.isbn}</p>
      <div className="mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/`)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
