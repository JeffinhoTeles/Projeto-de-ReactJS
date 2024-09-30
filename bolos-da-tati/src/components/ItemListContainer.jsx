import React from 'react';
import ItemCount from './ItemCount';  
const ItemListContainer = ({ greeting }) => {
  const onAdd = (quantity) => {
    console.log(`Adicionado ${quantity} itens ao carrinho`);
  };

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>      
      <ItemCount stock={15} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
