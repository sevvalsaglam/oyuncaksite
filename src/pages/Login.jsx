import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    // TODO: Backend entegrasyonu yapılacak
    console.log('Login:', { email, password });
    alert('Giriş başarılı (mock)');
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn primary">Giriş Yap</button>
      </form>

      <button className="btn secondary" onClick={() => alert('Google Giriş yapılacak')}>
        Google ile Giriş Yap
      </button>

      <p>
        Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
      </p>
    </div>
  );
};

export default Login;
