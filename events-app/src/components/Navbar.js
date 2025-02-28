import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <div className="navbar-logo">
          <Link to="/">Логотип</Link>
        </div>

        {/* Меню */}
        <ul className="navbar-menu">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/events">Мероприятия</Link>
          </li>
          <li>
            <Link to="/create-event">Создать мероприятие</Link>
          </li>
        </ul>

        {/* Номер телефона */}
        <div className="navbar-phone">
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;