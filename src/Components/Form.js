import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Input = () => {
  const [form, setInput] = useState({
    id: '', title: '', author: '', category: '',
  });

  const handleDataChange = (event) => {
    setInput({
      ...form,
      item_id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(form));
    setInput({
      id: '', title: '', author: '', category: '',
    });
  };
  return (
    <div className="add-bk">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="title" value={form.title} onChange={handleDataChange} placeholder="Book Title" />
          <input type="text" name="author" value={form.author} onChange={handleDataChange} placeholder="author name" />
          <button type="submit">Add Book </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
