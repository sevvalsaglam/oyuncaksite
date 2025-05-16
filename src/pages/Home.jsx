import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className="home-container">
      <Banner type="hero" />
      <section>
        <h2>Kategoriler</h2>
        <CategoryList />
      </section>
      <section>
        <h2>Popüler Oyuncaklar</h2>
        <ProductList type="popular" />
      </section>
      <Banner type="mid" />
      <section>
        <h2>Yeni Gelenler</h2>
        <ProductList type="new" />
      </section>
    </div>
  );
};

export default Home;
