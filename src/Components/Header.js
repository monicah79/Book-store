import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../user-logo.png';

const Header = () => (
  <div className="header-top">
    <div className="header">
      <h1 className="h1">Bookstore CMS</h1>
      <li className="li"><Link to="/" style={{ color: '#000', textDecoration: 'none', fontSize: '15px' }}>Books</Link></li>
      <li className="li"><Link to="/Categories" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '15px' }}>Categories</Link></li>
    </div>
    <div>
      <img className="img" src={Img} alt="logo" />
    </div>

  </div>
);

export default Header;
