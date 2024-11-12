// AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firestore"; // Ajuste o caminho conforme necessário

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(""); // Novo estado para armazenar o nome

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        setUser(firebaseUser);
        setUserName(userDoc.data()?.name || ""); // Define o nome do usuário se estiver disponível
      } else {
        setUser(null);
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, userName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
