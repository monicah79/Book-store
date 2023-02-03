import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    <div>
        <h1>Bookstore CMS</h1>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
    </div>
}

export default Header