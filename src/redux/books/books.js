const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [
  { title: 'Hunger Game', author: 'Suzanne Collins', id: 1 },
  { title: 'Duke', author: 'Franks Haywards', id: 2 },
  { title: 'Capital in the 20 century', author: 'Suzanne Collins', id: 3 },
];

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
      id: book.id,
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
