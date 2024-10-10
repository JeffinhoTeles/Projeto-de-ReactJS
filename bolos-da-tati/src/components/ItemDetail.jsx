import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate(); // Hook para navegação

  const handleAddToCart = (quantity) => {
    addItem(item, quantity); // Adiciona o item ao carrinho
    setAddedToCart(true);
    navigate('/cart'); // Redireciona para a página do carrinho após adicionar o item
  };

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

            {/* Passando o estoque e a função handleAddToCart para o ItemCount */}
            <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
