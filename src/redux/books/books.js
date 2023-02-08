const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export function addBook(books) {
  return {
    type: ADD_BOOK,
    payload: books,
  };
}

export function removeBoook(id) {
  return {
    type: REMOVE_BOOK,
    book: id,
  };
}

export default bookReducer;
