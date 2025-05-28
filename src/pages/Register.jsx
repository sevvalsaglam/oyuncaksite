import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    console.log('Register:', form);
    alert('Kayıt başarılı (mock)');
  };

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
      <img className="loginlogo" src='public/background/25.png'></img>
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
        <button type="submit" className="btn primary">Kayıt Ol</button>
      </form>

      <p>
        Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
      </p>
    </div>
  );
};

export default Register;
