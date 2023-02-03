import React from 'react';

const Input = () => (
  <div className="add-bk">
    <h2>ADD NEW BOOK</h2>
    <div>
      <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="category" placeholder="Category" />
        <button type="submit">Add Book </button>
      </form>
    </div>
  </div>
);

export default Input;
