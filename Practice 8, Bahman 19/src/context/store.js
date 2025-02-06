import { configureStore } from "@reduxjs/toolkit";
import { booksApiSlice } from "../api/BooksApiSlice";

const store = configureStore({
  reducer: {
    [booksApiSlice.reducerPath]: booksApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApiSlice.middleware),
});

export default store;
