import React from 'react'; 
const CartWidget = () => {
  return (
    <button
      type="button"
      className="btn btn-link position-relative"
    >
      <i className="fas fa-shopping-cart"></i>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        id="cart-count"
      >
        0
      </span>
    </button>
  );
};

export default CartWidget;
