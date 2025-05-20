import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import googleLogo from '/icons/google.svg.png'; 

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

  const handleGoogleLogin = () => {
    alert('Google ile giriş yapılacak (mock)');
    // TODO: Google OAuth
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <img className="loginlogo" src='public/background/25.png'></img>
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

      <button className="btn google-btn" onClick={handleGoogleLogin}>
        <img src={googleLogo} alt="Google" />
        <span>Google ile Giriş Yap</span>
      </button>

      <p>
        Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
      </p>
    </div>
  );
};

export default Login;
