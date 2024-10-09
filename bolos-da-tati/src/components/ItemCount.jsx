import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    if (stock > 0) {
      onAdd(count); // Emite o evento com a quantidade selecionada
    }
  };

  return (
    <div className="item-count-container text-center">
      <div className="controls d-flex justify-content-center align-items-center">
        <button onClick={handleSubtract} className="btn btn-outline-danger mx-2">
          <i className="fas fa-minus"></i> 
        </button>
        <span className="fs-5">{count}</span>
        <button onClick={handleAdd} className="btn btn-outline-success mx-2">
          <i className="fas fa-plus"></i> 
        </button>
      </div>
      <button onClick={handleOnAdd} className="btn btn-primary mt-3">
        <i className="fas fa-cart-plus"></i> 
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;
