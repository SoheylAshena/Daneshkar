import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateBookMutation } from "../api/BooksApiSlice";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const navigate = useNavigate();

  const [createBook, { isLoading }] = useCreateBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook({
        title,
        author,
        publicationYear: parseInt(publicationYear),
        isbn,
      }).unwrap();

      alert("Book created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create book.");
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-8 shadow-lg transition-all duration-300 dark:bg-gray-800">
      <h1 className="mb-6 text-center text-3xl font-extrabold text-gray-800 dark:text-gray-100">
        Add New Book
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Publication Year */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            Publication Year
          </label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* ISBN */}
        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold text-gray-700 dark:text-gray-300">
            ISBN
          </label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Add Book */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-indigo-600 py-3 text-lg text-white transition duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
