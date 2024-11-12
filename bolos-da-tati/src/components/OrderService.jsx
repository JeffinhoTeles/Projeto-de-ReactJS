import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firestore";

export const createOrder = async (buyer, items, total) => {
  try {
    const order = {
      buyer,
      items,
      total,
      date: new Date().toISOString(),
    };

    const orderCollection = collection(db, "orders");
    const docRef = await addDoc(orderCollection, order);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao adicionar ordem: ", error);
    return null;
  }
};

//implementar o stripe como getway de pagamento
//criar uma pagina para mostrar o pedido efetuado -> Feito

// ------ Pegar do codigo do prof ---------
//criar o login, logout com base no codigo do professor
//configurar variavel de ambiente do FireStore
