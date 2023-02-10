import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBoook } from '../redux/books/books';

const Bookitems = (props) => {
  const {
    title, author, id,
  } = props;
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeBoook(id));
  };
  return (
    <div className="book-items">
      <h3 className="bk">{title}</h3>
      <h4 className="bk-2">{author}</h4>
      <button type="button" onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

Bookitems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookitems;
