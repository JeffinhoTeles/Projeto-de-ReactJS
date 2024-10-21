import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importações do Firestore
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = () => {
  const { addItem } = useContext(CartContext);
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Para obter o ID do item da URL
  const navigate = useNavigate();
  const db = getFirestore(); // Inicializar Firestore

  useEffect(() => {
    // Função para buscar o item específico do Firestore
    const fetchItem = async () => {
      const itemRef = doc(db, "items", id); // Referência ao documento pelo ID
      const docSnap = await getDoc(itemRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() }); // Definir os dados do item no estado
      } else {
        console.log("No such item!");
      }
    };

    fetchItem();
  }, [id, db]);

  const handleAddToCartClick = (quantity) => {
    addItem(item, quantity);
    toast.success(`${item.title} adicionado ao carrinho!`);
  };

  const handleReturnToProducts = () => {
    navigate("/");
  };

  // Renderizar um carregando até que o item seja buscado
  if (!item) {
    return <p>Carregando...</p>;
  }

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
