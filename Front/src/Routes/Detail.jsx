import React, { useEffect, useState } from 'react'; // Importa React y useEffect de la librería React
import { useParams } from 'react-router-dom'; // Importa useParams de react-router-dom para obtener los parámetros de la URL
import './Detail.css'; // Importa los estilos CSS personalizados para el componente Detail
import { useUser } from '../UserContext';

const Detail = ({ products }) => { // Define el componente Detail que recibe una prop llamada products
  const { productId } = useParams(); // Extrae el productId de los parámetros de la URL usando useParams
  const product = products.find((product) => product.id === parseInt(productId)); // Busca el producto en la lista de productos que tiene el id correspondiente

  if (!product) { // Si el producto no se encuentra, muestra un mensaje de error
    return <div>Product not found</div>;
  }

  const { user } = useUser();

  return (
    <div className="Detail"> {/* Contenedor principal del componente Detail */}
      <div className="Detail-imgContent"> {/* Contenedor de la imagen del producto */}
        <img src={product.imageUrl} alt={product.name} /> {/* Muestra la imagen del producto */}
      </div>

      <div className="Detail-textContent"> {/* Contenedor del texto descriptivo del producto */}
        <h2>{product.name}</h2> {/* Muestra el nombre del producto */}
        <h2>Precio: {product.price}</h2> {/* Muestra el precio del producto */}
        <a>...</a> {/* Enlace o espacio para información adicional */}
        <p>{product.subCategory} para {product.mainCategory}</p> {/* Muestra la subcategoría y la categoría principal del producto */}
        <p>Talla: {product.size}</p> {/* Muestra la talla del producto */}
        <a>...</a> {/* Enlace o espacio para información adicional */}
        <p>{product.largeDescription}</p> {/* Muestra una descripción larga del producto */}
      </div>
    </div>
  );
}

export default Detail;