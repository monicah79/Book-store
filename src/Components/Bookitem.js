import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBoook } from '../redux/books/books';

const Bookitems = (props) => {
  const { title, author, id } = props;

  const dispatch = useDispatch();
  const handleRemoveClick = (id) => {
    dispatch(removeBoook(id));
  };
  return (
    <div className="book-items">
      {}
      <li className="bk">{title}</li>
      <li className="bk-2">{author}</li>
      <button type="button" onClick={() => handleRemoveClick(id)}>Remove</button>
    </div>
  );
};

Bookitems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookitems;
