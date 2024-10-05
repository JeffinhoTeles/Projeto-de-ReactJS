import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (quantity) => {
    console.log(`Adicionado ${quantity} unidades de ${item.title} ao carrinho.`);
    setAddedToCart(true);
  };

  if (!item) return null;

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.pictureUrl} className="img-fluid rounded-start" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text"><small className="text-muted">Preço: R$ {item.price}</small></p>

            {item.stock > 0 ? (
              !addedToCart ? (
                <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
              ) : (
                <p className="text-success">Produto adicionado ao carrinho!</p>
              )
            ) : (
              <p className="text-danger">Produto fora de estoque</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
