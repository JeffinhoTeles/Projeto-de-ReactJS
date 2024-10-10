import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  // Contar quantos itens estão no carrinho
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="btn btn-outline-primary position-relative">
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
