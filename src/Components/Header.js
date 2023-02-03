import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <li className="li"><Link to="/" style={{ color: 'blue' }}>Books</Link></li>
    <li className="li"><Link to="/Categories" style={{ color: 'blue' }}>Categories</Link></li>
  </div>
);

export default Header;
