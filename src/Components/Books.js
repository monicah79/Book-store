import React from 'react';
import { useSelector } from 'react-redux';
import Bookitems from './Bookitem';
import Input from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="the-container">
      {books.map((bk) => <Bookitems key={bk.id} id={bk.id} title={bk.title} author={bk.author} />)}

      <Input />
    </div>
  );
};

export default Books;
