import React from 'react';
import logo from 'src/assets/images/logo-github.png';

import './style.scss';

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo Github" />
    <nav className="header__nav">
      <a className="header__link" href="/">Recherche</a>
      <a className="header__link" href="/faq">FAQ</a>
    </nav>
  </div>
);

export default Header;
