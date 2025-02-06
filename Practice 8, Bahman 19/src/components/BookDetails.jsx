import { useParams, useNavigate } from "react-router";
import {
  useGetBookByIdQuery,
  useDeleteBookMutation,
} from "../api/BooksApiSlice";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetBookByIdQuery(id);
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">
          Loading book details...
        </p>
      </div>
    );

  if (error) {
    return (
      <p className="text-center text-red-500">Failed to fetch book details.</p>
    );
  }

  const book = data?.data;

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      alert("Book deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to delete book.");
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded bg-white p-6 shadow transition-all duration-300 dark:bg-gray-800">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {book.title}
      </h1>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        Author: {book.author}
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        Publication Year: {book.publicationYear}
      </p>
      <p className="mb-2 text-gray-700 dark:text-gray-300">ISBN: {book.isbn}</p>

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={handleDelete}
          className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => {
            navigate(`/update/${id}`);
          }}
          className="rounded bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
        >
          Update
        </button>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
