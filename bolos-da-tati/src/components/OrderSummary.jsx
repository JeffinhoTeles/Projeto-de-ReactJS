import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, doc, getDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const OrderSummary = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const { user, userName } = useAuth(); // Obtenha o usuário e o nome do contexto de autenticação

  useEffect(() => {
    const fetchOrder = async () => {
      const db = getFirestore();
      const orderRef = doc(db, "orders", orderId);
      const orderDoc = await getDoc(orderRef);

      if (orderDoc.exists()) {
        setOrder(orderDoc.data());
      } else {
        toast.error("Pedido não encontrado!");
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return (
      <div className="container mt-5 text-center">
        <h5>Carregando...</h5>
      </div>
    );
  }

  const orderDate =
    order.date instanceof Timestamp
      ? order.date.toDate()
      : new Date(order.date);
  const formattedDate = orderDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div
      className="container mt-5 p-4"
      style={{ backgroundColor: "#f4f8fb", borderRadius: "8px" }}
    >
      <ToastContainer />
      <div className="card shadow-sm">
        <div
          className="card-header text-center"
          style={{ backgroundColor: "#6c757d", color: "#ffffff" }}
        >
          <h3>Resumo do Pedido</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Data do Pedido:</strong> {formattedDate}
                </li>
                <li className="list-group-item">
                  <strong>Comprador:</strong> {userName || order.buyer.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {user?.email || order.buyer.email}
                </li>
                <li className="list-group-item">
                  <strong>Telefone:</strong> {order.buyer.phone}
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-end">
              <h4 className="mt-3 text-success">
                Total: R$ {order.total.toFixed(2)}
              </h4>
            </div>
          </div>

          <h5 className="mt-4">Itens do Pedido:</h5>
          <ul className="list-group mb-3">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.title}</strong> <br />
                  Quantidade: {item.quantity} x R$ {item.price.toFixed(2)}
                </div>
                <span className="text-primary">
                  Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-info me-3 text-white">
              Voltar às Compras
            </Link>
            <button onClick={() => window.print()} className="btn btn-dark">
              Imprimir Resumo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
