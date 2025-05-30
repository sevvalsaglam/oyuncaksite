import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai';



const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleEducativeClick = () => {
    navigate('/educative');
  };

  const [searchQuery, setSearchQuery] = useState('');

const handleSearchSubmit = (e) => {
  if (e.key === 'Enter' && searchQuery.trim()) {
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  }
};
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="/logo/1.png" alt="Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/categories">Kategoriler</Link>
        </nav>
      </div>

      <div className="header-center">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
  type="text"
  placeholder="Ürün ara..."
  className="search-bar"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={handleSearchSubmit}
/>

        </div>
      </div>

      <div className="header-right">
      <div className="mobile-nav-icons">
  <Link to="/" title="Ana Sayfa">
    <AiOutlineHome />
  </Link>
  <Link to="/categories" title="Kategoriler">
    <AiOutlineAppstore />
  </Link>
</div>
        <Link to="/favorites" title="Favoriler">
          <AiOutlineHeart />
        </Link>
        <Link to="/cart" title="Sepet" className="cart-link">
          <FiShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login" title="Profil">
          <FiUser />
        </Link>
      </div>

      <button className="educative-button" onClick={handleEducativeClick}>
        🎈
      </button>
    </header>
  );
};

export default Header;
