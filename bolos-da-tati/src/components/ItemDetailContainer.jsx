import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../Firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Captura o ID do item da URL

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(db, "items", id);
        const docSnap = await getDoc(itemDoc);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Item não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o item: ", error);
      }
    };

    fetchItem();
  }, [id]);

  return <div>{item ? <ItemDetail item={item} /> : <p>Carregando...</p>}</div>;
};

export default ItemDetailContainer;
