// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNuBm8IXK33qdHBRlkOg5weeJTj-5nFhY",
  authDomain: "projeto-react-coderhouse.firebaseapp.com",
  projectId: "projeto-react-coderhouse",
  storageBucket: "projeto-react-coderhouse.appspot.com",
  messagingSenderId: "189119327895",
  appId: "1:189119327895:web:f7b40725684173be1603d2",
  measurementId: "G-71XJJ1DKLY",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
