const CHECKSTATUS = 'book-store/categories/CHECKSTATUS';

const categoriesReducer = (state = { arr: [] }, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export function checkStatus(payload) {
  return {
    type: CHECKSTATUS,
    payload,
  };
}

export default categoriesReducer;
