import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img 
        src={item.pictureUrl} 
        className="card-img-top img-fluid" 
        alt={item.title} 
        style={{ maxHeight: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Preço: R$ {item.price}</p>
        {/* Link para a página de detalhes do item */}
        <Link 
          to={`/item/${item.id}`} 
          className="btn btn-primary"
          aria-label={`Ver detalhes do produto ${item.title}`}
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default Item;
