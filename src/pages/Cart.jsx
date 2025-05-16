import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from '../features/cart/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) return <p>Sepetiniz boş.</p>;

  return (
    <div className="cart-container">
      <h2>Sepet</h2>
      {cartItems.map(({ product, quantity }) => (
        <div className="cart-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="info">
            <h4>{product.name}</h4>
            <p>{product.price.toFixed(2)} ₺</p>
          </div>
          <div className="quantity">
            <button onClick={() => dispatch(decrement(product.id))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(increment(product.id))}>+</button>
          </div>
          <div className="remove">
            <button onClick={() => dispatch(removeFromCart(product.id))}>🗑️</button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p><strong>Toplam:</strong> {total.toFixed(2)} ₺</p>
        <button className="btn secondary" onClick={() => dispatch(clearCart())}>
          Sepeti Boşalt
        </button>
        <button className="btn primary">Ödeme Yap</button>
      </div>
    </div>
  );
};

export default Cart;
