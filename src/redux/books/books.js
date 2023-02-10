import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: {
      id: uuidv4(),
      title: book.title,
      author: book.author,
    },
  };
}

export function removeBoook(id) {
  return {
    type: REMOVE_BOOK,
    payload: { id },
  };
}

export default bookReducer;
