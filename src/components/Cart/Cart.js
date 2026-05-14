import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateQuantity } from '../../app/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ id: 1, name: 'Producto 1', quantity: 1 })}>Añadir Producto</button>
    </div>
  );
};

export default Cart;