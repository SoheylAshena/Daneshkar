import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3010",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const booksApiSlice = createApi({
  reducerPath: "books",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `/api/books/${id}`,
      providesTags: (id) => [{ type: "Books", id }],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/api/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ({ id }) => [{ type: "Books", id }, "Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useLoginMutation,
  useRegisterMutation,
} = booksApiSlice;
