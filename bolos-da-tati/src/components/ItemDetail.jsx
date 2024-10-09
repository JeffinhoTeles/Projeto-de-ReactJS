import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar para o carrinho
import ItemCount from './ItemCount';

const ItemDetail = ({ item, addToCart }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0); // Estado para armazenar a quantidade selecionada
  const navigate = useNavigate(); // Hook para redirecionar para o carrinho

  const handleAdd = (quantity) => {
    setQuantityToAdd(quantity); // Armazena a quantidade recebida do ItemCount
  };

  const handleCheckout = () => {
    addToCart(item, quantityToAdd); // Adiciona ao carrinho
    navigate('/cart'); // Redireciona para o carrinho
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

            {quantityToAdd === 0 ? (
              <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
            ) : (
              <>
                <p className="text-success">Você adicionou {quantityToAdd} {quantityToAdd > 1 ? 'itens' : 'item'} ao carrinho!</p>
                <button onClick={handleCheckout} className="btn btn-primary">
                  Finalizar Compra
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
