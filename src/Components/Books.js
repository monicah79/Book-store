import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Bookitems from './Bookitem';
import Input from './Form';
import { fetchBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const shouldFetchBooks = useRef(true);
  useEffect(() => {
    if (shouldFetchBooks.current) {
      shouldFetchBooks.current = false;
      dispatch(fetchBook());
    }
    // eslint-disabled-next-line
  }, []);
  const books = useSelector((state) => state.books);

  return (
    <div className="the-container">
      {books.map((bk) => <Bookitems key={bk.id} id={bk.id} title={bk.title} author={bk.author} />)}

      <Input />
    </div>
  );
};

export default Books;
