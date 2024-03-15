import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EcoFlow ERP Lite</div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/orders">Orders</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
