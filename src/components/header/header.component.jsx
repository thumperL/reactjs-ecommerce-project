import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../crown.svg';
import './header.styles.scss';

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/" className="logo-container">
        <Logo className="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;