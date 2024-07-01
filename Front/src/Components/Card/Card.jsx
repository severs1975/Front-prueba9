// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
  if (!product || !product.id || !product.name || !product.description || !product.imageUrl
  ) {
    return null; // O puedes renderizar un componente de carga o un mensaje de error
  }

  // eslint-disable-next-line react/prop-types

  return (
    <Link to={`/detail/${product.id}`} className="product-card">
      <div className="card">
      
        <div className="imageContent">
          <img src={product.imageUrl} alt={name} />
        </div>
        <div className="card-content">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{'$'+product.price}</p>
        </div>
      
      </div>
    </Link>
  );
};

export default Card;