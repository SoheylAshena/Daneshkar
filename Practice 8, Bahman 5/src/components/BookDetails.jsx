import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publicationYear: "",
    isbn: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data.data);
        setFormData(response.data.data);
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

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/books/${id}`, formData);
      alert("Book updated successfully.");
      setUpdating(false);
      setBook(formData);
    } catch (error) {
      console.error(error);
      alert("Failed to update book.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!book)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-700 mb-2">Author: {book.author}</p>
      <p className="text-gray-700 mb-2">
        Publication Year: {book.publicationYear}
      </p>
      <p className="text-gray-700 mb-2">ISBN: {book.isbn}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => setUpdating(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={() => navigate(`/`)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>

      {updating && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Update Book</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="publicationYear"
                  className="block text-gray-700"
                >
                  Publication Year
                </label>
                <input
                  type="text"
                  id="publicationYear"
                  name="publicationYear"
                  placeholder={formData.publicationYear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="isbn" className="block text-gray-700">
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  placeholder={formData.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setUpdating(false);
                      setFormData(book);
                    }}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
