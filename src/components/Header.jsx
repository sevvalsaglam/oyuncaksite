import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleEducativeClick = () => {
    navigate('/educative');
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="/logo/3.png" alt="Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/categories">Kategoriler</Link>
        </nav>
      </div>

      <div className="header-center">
        <input type="text" placeholder="Ürün ara..." className="search-bar" />
      </div>

      <div className="header-right">
        <Link to="/favorites" title="Favoriler">
          ❤️
        </Link>
        <Link to="/cart" title="Sepet">
          🛒
        </Link>
        <Link to="/login" title="Profil">
          👤
        </Link>
      </div>

      <button className="educative-button" onClick={handleEducativeClick}>
        +3 🎈
      </button>
    </header>
  );
};

export default Header;
