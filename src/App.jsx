import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Educative from './pages/Educative';

const App = () => {
  
  useEffect(() => {
    const wrapper = document.getElementById('bg-wrapper');

    if (!wrapper) return;

    const imageNumbers = Array.from({ length: 42 }, (_, i) => i + 5).filter(n => n !== 18);
    const shuffled = imageNumbers.sort(() => Math.random() - 0.5);

    shuffled.forEach((num) => {
      const img = document.createElement('img');
      img.src = `/background/${num}.png`;
      img.style.top = `${Math.random() * 100}%`;
      img.style.left = `${Math.random() * 100}%`;
      img.style.setProperty('--random-angle', Math.random().toFixed(2));
      wrapper.appendChild(img);
    });
  }, []);

  return (
    <>
      <Header />
      <div id="bg-wrapper" className="background-wrapper"></div>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/educative" element={<Educative />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
