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
      <div className="text">
        <h3 className="bk">{title}</h3>
        <h4 className="bk-2 b1 bg">{author}</h4>
        <div className="btn-sectn">
          <button className="remove-btn b1" type="button">comment</button>
          <button className="remove-btn b1" type="button" onClick={handleRemoveClick}>Remove</button>
          <button className="remove-btn b1" type="button">Edit</button>
        </div>
      </div>

      <div className="score">
        <div className="completed">
          <div className="Oval-2" />
          <div>
            <p>76%</p>
            <p className="completed-p">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <h2 className="progress-h2">CURRENT CHAPTER</h2>
          <p>chapter 17</p>
          <div><button className="progress-btn" type="button">Update progress</button></div>

        </div>

      </div>

    </div>

  );
};

Bookitems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookitems;
