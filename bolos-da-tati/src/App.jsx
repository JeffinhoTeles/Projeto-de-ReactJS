import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />  {}
      <ItemListContainer greeting="Bem-vindo à Confeitaria Bolos da Tati" />
    </>
  );
}

export default App;
