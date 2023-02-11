import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const id = 'gyaAwM3WzGfPBNPn49xs';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`;

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const FETCH_BOOK = 'book-store/books/FETCH_BOOK';

export const fetchBook = createAsyncThunk(FETCH_BOOK, async () => {
  const res = await axios.get(url);
  const { data } = res;
  return data;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(url, book);

  return book;
});

export const removeBoook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${url}/${id}`);

  return id;
});

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((book) => {
        newState.push({
          id: book[0],
          title: book[1][0].title,
          author: book[1][0].author,
          categories: book[1][0].categories,
        });
      });
      return newState;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    });
    builder.addCase(removeBoook.fulfilled, (state, action) => {
      const newArr = state.filter((book) => book.id !== action.payload);
      return newArr;
    });
  },
});

export default bookSlice.reducer;
