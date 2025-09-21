import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.svg" alt="Green Mark Logo" className="logo-img" />
        <span className="brand-title">GREEN MARK</span>
        <span className="brand-sub">PLANTS SHOP</span>
      </div>
      <nav className="header-nav">
        <button className="categories-btn">
          <span className="menu-icon">&#9776;</span> ALL CATEGORIES
        </button>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About</li>
        </ul>
        <div className="header-icons">
          <span className="icon user">&#128100;</span>
          <span className="icon cart">&#128722;<span className="cart-badge">0</span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
