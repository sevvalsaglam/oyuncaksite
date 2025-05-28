import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/registerSlice';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import googleLogo from '/icons/google.svg.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate('/account');
    } catch (err) {
      alert('Giriş başarısız: ' + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <img className="loginlogo" src="public/background/25.png" />
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
        <button type="submit" className="btn primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>

      <button className="btn google-btn" onClick={() => alert('Google OAuth entegre edilecek.')}>
        <img src={googleLogo} alt="Google" />
        <span>Google ile Giriş Yap</span>
      </button>

      <p>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link></p>
    </div>
  );
};

export default Login;
