import React from 'react';
import PropTypes from 'prop-types';

const Bookitems = (props) => {
  const { title, author } = props;
  return (
    <div className="book-items">
      <li className="bk">{title}</li>
      <li className="bk-2">{author}</li>
    </div>
  );
};

Bookitems.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookitems;
