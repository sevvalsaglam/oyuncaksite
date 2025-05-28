import React, { useEffect } from 'react';
import './CategoryList.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/category/categorySlice';

const CategoryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: categories, status } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleClick = (name) => {
    navigate(`/categories?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="category-card"
          onClick={() => handleClick(cat.name)}
        >
          <img src={cat.image} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
