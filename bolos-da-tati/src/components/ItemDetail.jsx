import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCartClick = (quantity) => {
    addItem(item, quantity);
    toast.success(`${item.title} adicionado ao carrinho!`);
  };

  const handleReturnToProducts = () => {
    navigate("/");
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.pictureUrl}
            className="img-fluid rounded-start"
            alt={item.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <small className="text-muted">Preço: R$ {item.price}</small>
            </p>
            <ItemCount
              stock={item.stock}
              initial={1}
              onAdd={handleAddToCartClick}
            />

            <button
              onClick={handleReturnToProducts}
              className="btn btn-outline-primary mt-3"
            >
              Voltar às Compras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
