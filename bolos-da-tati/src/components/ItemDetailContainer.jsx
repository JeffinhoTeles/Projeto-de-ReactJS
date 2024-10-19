import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import bolo from '../assets/bolo.jpg';
import docinho from '../assets/docinho.jpg';
import torta from '../assets/torta.jpg';

const getItem = (id) => {  
  const mockItems = [
    { id: 1,stock: 5, title: 'Bolo', description: 'Bolo Red Velvet', price: 30, pictureUrl: bolo },
    { id: 2, stock: 5,title: 'Docinhos', description: 'Diversos docinhos', price: 50, pictureUrl: docinho },
    { id: 3,stock: 5, title: 'Torta', description: 'Torta de morango', price: 50, pictureUrl: torta },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems.find(item => item.id === parseInt(id)));
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="container mt-5">
      {loading ? (
        <p>Carregando detalhes do produto...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
