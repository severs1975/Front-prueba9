import React, { useEffect, useState } from 'react';
import CardCat from '../Card/CardCat.jsx';
import './Categorias.css'

const Categorias = ({ products }) => {
  // Declaraciones de console.log para depuración

  // Estado para almacenar los productos desordenados
  const [shuffledProducts, setShuffledProducts] = useState([])

  // Usar el hook useEffect para desordenar el arreglo de productos cuando cambie
  useEffect(() => {
    const shuffledArray = shuffleArray(products);
    setShuffledProducts(shuffledArray.slice(0, 27)); // Establecer los primeros 27 productos desordenados
  }, [products]);

  // Función para desordenar los elementos de un arreglo aleatoriamente
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Función para dividir los productos desordenados en una cuadrícula 2D
  const divideIntoGrid = (products) => {
    const grid = [];
    const maxRows = 1; // Número máximo de filas en la cuadrícula
    const maxCols = 20; // Número máximo de columnas en la cuadrícula
    let array = ['Mujer', 'Hombre', 'Mascotas', 'Niños']; // Categorías a filtrar

    for (let row = 0; row < maxRows; row++) {
      grid[row] = [];
      for (let col = 0; col < maxCols; col++) {
        const index = row * maxCols + col;
        if (index < products.length) {
          const objectIndex = products[index];
          const elementoAEliminar = products[index].mainCategory; // Categoría a eliminar
          const longitudOriginal = array.length; // Longitud original del arreglo
          array = array.filter((elemento) => elemento !== elementoAEliminar); // Eliminar la categoría del arreglo
          const eliminadoExitosamente = array.length < longitudOriginal; // Verificar si la categoría se eliminó con éxito
          if (eliminadoExitosamente) {
            grid[row][col] = objectIndex; // Agregar el producto a la cuadrícula si la categoría se eliminó con éxito
          }
        } else {
          grid[row][col] = null; // Agregar un espacio vacío si no hay más productos
        }
      }
    }
    return grid;
  };

  // Dividir los productos desordenados en una cuadrícula
  const grid = divideIntoGrid(shuffledProducts);

  return (
    <div className='categorias'>
      <section>
        <div><h2>Categorias</h2></div>
        <div>
          {/* Renderizar la cuadrícula de productos */}
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((product, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="colCat">
                  {/* Renderizar un componente CardCat para cada producto o un espacio vacío */}
                  {product ? <CardCat product={product} /> : <div className="empty-card" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categorias;