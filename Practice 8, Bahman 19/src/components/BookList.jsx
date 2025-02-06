import { Link } from "react-router";
import { useGetBooksQuery } from "../api/BooksApiSlice";

const BookList = ({ query }) => {
  const { data, error, isLoading } = useGetBooksQuery();
  const { searchQuery } = query;

  const books = () => {
    if (searchQuery) {
      return data.data.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      return data.data;
    }
  };

  if (isLoading) {
    return (
      <p className="text-center text-gray-600 dark:text-gray-400">
        Loading books...
      </p>
    );
  }

  if (error) {
    console.log(error);
    return (
      <p className="text-center text-red-500">
        "Failed to fetch books, please try again later."
      </p>
    );
  }

  return (
    <div className="mx-auto my-8 max-w-4xl">
      {/* Title */}
      <h1 className="mb-10 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
        Books
      </h1>

      {/* Books List */}
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {books().map((book) => (
          <li
            key={book._id}
            className="transform rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105 dark:bg-gray-800 dark:shadow-xl"
          >
            {/* Book Title */}
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
              {book.title}
            </h2>

            {/* Book Author */}
            <p className="mb-1 text-gray-600 dark:text-gray-400">
              Author: {book.author}
            </p>

            {/* Book Year */}
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Year: {book.publicationYear}
            </p>

            {/* View Details Link */}
            <div className="flex justify-between">
              <Link
                to={`/books/${book._id}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
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
