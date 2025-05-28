import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserAccount.css';
import { logoutUser } from '../features/user/registerSlice'; 

const UserAccount = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!user) {
    return (
      <div className="user-account">
        <h2>Lütfen giriş yapınız</h2>
        <Link className="btn primary" to="/login">Giriş Yap</Link>
      </div>
    );
  }

  return (
    <div className="user-account">
      <h2>Merhaba, {user.name}!</h2>
      <div className="user-info">
        <p><strong>Ad Soyad:</strong> {user.name}</p>
        <p><strong>E-posta:</strong> {user.email}</p>
      </div>

      <div className="user-actions">
        <Link to="/orders" className="btn secondary">Siparişlerim</Link>
        <Link to="/favorites" className="btn secondary">Favorilerim</Link>
        <Link to="/cart" className="btn secondary">Sepetim</Link>
        <button className="btn danger" onClick={handleLogout}>Çıkış Yap</button>
      </div>
    </div>
  );
};

export default UserAccount;
