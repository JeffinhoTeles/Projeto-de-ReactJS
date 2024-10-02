import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import bolo from '../assets/bolo.jpg';
import docinho from '../assets/docinho.jpg';
import torta from '../assets/torta.jpg';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulando uma chamada de rede com uma promise
  useEffect(() => {
    const mockItems = [
      { id: 1, title: 'Bolo', price: 30, pictureUrl: bolo },
      { id: 2, title: 'Docinho', price: 50, pictureUrl: docinho },
      { id: 3, title: 'Torta', price: 50, pictureUrl: torta },
    ];

    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems);
      }, 2000);  // Simulando um atraso de 2 segundos
    });

    fetchItems.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      {loading ? (
        <p>Carregando itens...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
