import React, { useState } from "react";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../api/BooksApiSlice";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = ({ setUpdating }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBookByIdQuery(id);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  const book = data?.data;

  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    publicationYear: book?.publicationYear || "",
    isbn: book?.isbn || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook({ id, ...formData }).unwrap();
      alert("Book updated successfully!");
      if (setUpdating) setUpdating(false);
      navigate(`/books/${id}`);
    } catch (error) {
      console.error("Update failed", error);
      alert("Failed to update book");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching book data.</p>;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
      <div className="w-96 rounded bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Update Book
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 dark:text-gray-300"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="publicationYear"
              className="block text-gray-700 dark:text-gray-300"
            >
              Publication Year
            </label>
            <input
              type="text"
              id="publicationYear"
              name="publicationYear"
              value={formData.publicationYear}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="isbn"
              className="block text-gray-700 dark:text-gray-300"
            >
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setUpdating && setUpdating(false);
                navigate(`/books/${id}`);
              }}
              className="rounded bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            >
              {isUpdating ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
