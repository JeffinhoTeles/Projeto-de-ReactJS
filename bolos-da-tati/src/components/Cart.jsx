import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clear } = useContext(CartContext);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false); // Estado para controlar a mensagem de compra finalizada

  // Calcular o total do carrinho
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Função para finalizar a compra
  const handlePurchase = () => {
    setPurchaseCompleted(true); // Exibe a mensagem de compra finalizada
    clear(); // Limpa o carrinho após a compra
  };

  if (cartItems.length === 0 && !purchaseCompleted) {
    return <p className="text-center">O carrinho está vazio</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Seu Carrinho</h2>

      {/* Mostrar a mensagem de compra finalizada */}
      {purchaseCompleted ? (
        <div className="alert alert-success text-center" role="alert">
          Compra finalizada com sucesso!
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <ul className="list-group">
                {cartItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="fw-bold">{item.title}</span>
                      <span>Preço Unitário: R$ {item.price}</span>
                      <span>Subtotal: R$ {item.price * item.quantity}</span>

                      {/* Controles para aumentar e diminuir a quantidade */}
                      <div className="d-flex align-items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="btn btn-outline-danger btn-sm me-2"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="btn btn-outline-success btn-sm ms-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="btn btn-danger btn-sm"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Exibição do total */}
          <div className="row mt-4">
            <div className="col-12 text-end">
              <h4>Total: R$ {total.toFixed(2)}</h4>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <button onClick={clear} className="btn btn-warning me-2">Limpar Carrinho</button>
              <button onClick={handlePurchase} className="btn btn-success">Finalizar Compra</button> 
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
