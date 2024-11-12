import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firestore";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); // Para capturar o parâmetro de categoria

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let itemsQuery;
        if (categoryId) {
          // Filtro de categoria
          itemsQuery = query(
            collection(db, "items"),
            where("category", "==", categoryId)
          );
        } else {
          // Todos os itens
          itemsQuery = collection(db, "items");
        }

        const querySnapshot = await getDocs(itemsQuery);
        const fetchedItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(fetchedItems);
      } catch (error) {
        console.error("Erro ao buscar itens: ", error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
