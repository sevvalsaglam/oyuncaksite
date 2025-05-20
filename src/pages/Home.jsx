import React from 'react';
import HomeCategoryList from '../components/HomeCategoryList'; // import et
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Banner type="hero" />
      <section>
        <h2>Kategoriler</h2>
        <HomeCategoryList />
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
