import React from 'react';
import "./CardAdmin.css";

const CardAdmin = ({ product }) => (
<div className="card">

  <div >
    <h2>{product.name}</h2>
    <div className="imageContent">
      <img src={product.imageUrl} alt={name} />
    </div>
  </div>


  
    
    <table className="cardTable">
      <tbody>
        <tr>
          <td><strong>ID:</strong></td>
          <td>{product.id}</td>
        </tr>
        <tr>
          <td><strong>Categoría Principal:</strong></td>
          <td>{product.mainCategory}</td>
        </tr>
        <tr>
          <td><strong>Categoría Secundaria:</strong></td>
          <td>{product.subCategory}</td>
        </tr>
        <tr>
          <td><strong>Talla:</strong></td>
          <td>{product.size}</td>
        </tr>
        <tr>
          <td><strong>Precio:</strong></td>
          <td>{product.price}</td>
        </tr>
        <tr>
          <td><strong>Descripción:</strong></td>
          <td>{product.description}</td>
        </tr>
      </tbody>
    </table>
  </div>
    


);

export default CardAdmin;
