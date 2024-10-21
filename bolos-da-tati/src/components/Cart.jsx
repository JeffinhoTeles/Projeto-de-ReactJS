import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clear } =
    useContext(CartContext);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [isCartCleared, setIsCartCleared] = useState(false);
  const navigate = useNavigate();

  // Função para finalizar a compra
  const handlePurchase = () => {
    setPurchaseCompleted(true);
    setIsCartCleared(false);
    clear();
    toast.success("Compra finalizada com sucesso!");
    setTimeout(() => navigate("/"), 2000);
  };

  // Função para limpar o carrinho
  const handleClearCart = () => {
    clear();
    setPurchaseCompleted(false);
    setIsCartCleared(true);
    toast.info("Carrinho limpo!");
    setTimeout(() => navigate("/"), 2000);
  };

  // Calcular o total do carrinho
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0 && !purchaseCompleted && !isCartCleared) {
    return <p className="text-center">O carrinho está vazio</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Seu Carrinho</h2>
      <ToastContainer />
      {purchaseCompleted && (
        <div className="alert alert-success text-center" role="alert">
          Compra finalizada com sucesso!
        </div>
      )}
      {isCartCleared && (
        <div className="alert alert-success text-center" role="alert">
          Carrinho limpo com sucesso!
        </div>
      )}
      {!purchaseCompleted && !isCartCleared && cartItems.length > 0 && (
        <>
          <div className="row">
            <div className="col-12">
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex flex-column">
                      <span className="fw-bold">{item.title}</span>
                      <span>Preço Unitário: R$ {item.price}</span>
                      <span>Subtotal: R$ {item.price * item.quantity}</span>

                      <div className="d-flex align-items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-outline-danger btn-sm me-2"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
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

          <div className="row mt-4">
            <div className="col-12 text-end">
              <h4>Total: R$ {total.toFixed(2)}</h4>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <button
                onClick={handleClearCart}
                className="btn btn-warning me-2"
              >
                Limpar Carrinho
              </button>
              <button onClick={handlePurchase} className="btn btn-success">
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

//fazer um redirect e um toast para o botao remove
//consertar o botao de adicionar ao carinho, que quando clicar mais vezes nao adicionar mais produtos
//toast de adicionar ao carinho está funcionando so uma vez, quando atualiza e funciona somente aquela vez
// no carto por um boptao para voltar aos produtos
