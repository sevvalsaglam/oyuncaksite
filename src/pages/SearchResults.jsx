import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './SearchResults.css';


const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch(`http://localhost:8080/api/products/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Arama Sonuçları: "{query}"</h2>
      {results.length === 0 ? (
        <p>Sonuç bulunamadı.</p>
      ) : (
        <div className="product-list related-list">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
