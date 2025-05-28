import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/registerSlice';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    dispatch(registerUser(form));
  };

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
      <img className="loginlogo" src="/background/25.png" alt="Kayıt" />

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Ad Soyad"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="E-posta"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Şifre"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn primary">
          Kayıt Ol
        </button>
      </form>

      {status === 'loading' && <p>Kayıt olunuyor...</p>}
      {status === 'succeeded' && <p>Kayıt başarılı!</p>}
      {status === 'failed' && <p>Hata: {error}</p>}

      <p>
        Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
      </p>
    </div>
  );
};

export default Register;
