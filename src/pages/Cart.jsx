import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCart,
  addToCart,
  removeFromCart,
  clearCart,
} from '../features/cart/cartSlice';
import './Cart.css';
import { FiTrash } from 'react-icons/fi';

const Cart = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser?.id;

  const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector(state => state.cart.status);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);

  const handleIncrement = (item) => {
    dispatch(addToCart({
      userId,
      productId: item.product.id,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({
        userId,
        productId: item.product.id,
        quantity: item.quantity - 1
      }));
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const total = Array.isArray(cartItems)
  ? cartItems.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0)
  : 0;



  if (status === 'loading') return <p>Sepet yükleniyor...</p>;
  if (cartItems.length === 0) return <p>Sepetiniz boş.</p>;

  return (
    <div className="cart-container">
      <h2>Sepet</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.product.image} alt={item.product.name} />
          <div className="info">
            <h4>{item.product.name}</h4>
            <p>{item.product.price.toFixed(2)} ₺</p>
          </div>
          <div className="quantity">
            <button onClick={() => handleDecrement(item)}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
          <div className="remove">
            <button onClick={() => handleRemove(item.id)}>
              <FiTrash />
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <p><strong>Toplam:</strong> {total.toFixed(2)} ₺</p>
        <button className="btn secondary" onClick={() => dispatch(clearCart(userId))}>
          Sepeti Boşalt
        </button>
        <button className="btn primary">Ödeme Yap</button>
      </div>
    </div>
  );
};

export default Cart;
