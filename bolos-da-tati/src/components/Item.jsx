import React, { useState } from 'react';
import ItemCount from './ItemCount';  // Importando o ItemCount

const Item = ({ item }) => {
  const [selectedCount, setSelectedCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setSelectedCount(quantity);
    console.log(`Adicionado ${quantity} unidades de ${item.title} ao carrinho.`);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Preço: R$ {item.price}</p>

        {/* Adicionando o ItemCount para controlar a quantidade */}
        <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />

        {/* Mostrando quantidade selecionada */}
        {selectedCount > 0 && (
          <p className="text-success mt-2">Você selecionou {selectedCount} unidade(s).</p>
        )}
      </div>
    </div>
  );
};

export default Item;
