import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './UserFilter2.css';
import CardFilter2 from '../Components/Card/CardFilter2'; // Importa el componente para mostrar los productos
import { useNavigate } from 'react-router-dom';

const UserFilter2 = ({ products }) => { // Define el componente UserFilter2 que recibe products como props (lista de todos los productos disponibles)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Define el número de productos a mostrar por página.   
    const location = useLocation(); // Obtiene el objeto location actual de react-router-dom
    const navigate = useNavigate();
    const { state } = location; // Extrae el estado pasado desde el Buscador (el payload)
    const [filteredProducts, setFilteredProducts] = useState(products); // para almacenar los productos filtrados y lo inicializa con todos los productos.

    useEffect(() => {
        if (state) { //verifica que el estado esta defino y que no sea nulo para avanzar con el filtrado
            let filtered = products; //se asigna a la variable "filtered" la lista completa de productos.
            //Aqui se almacera la lista completa de productos.

            // Filtra los productos según la consulta de búsqueda
            if (state.consulta) { //si existe una consulta en el estado, entonces proceder a filtrar.
                filtered = filtered.filter(product => product.name.toLowerCase().includes(state.consulta.toLowerCase()));
            } //filtro por nombre, todos los productos de mi lista.
            
            
            // Filtra los productos según las fechas
            if (state.fechaInicial && state.fechaFinal) { //si existen, proceder.
                const fechaInicial = new Date(state.fechaInicial); // Convierte la fecha inicial a un objeto Date
                const fechaFinal = new Date(state.fechaFinal); // Convierte la fecha final a un objeto Date


                filtered = filtered.filter(product => {

                let productStartDate  = new Date("2000-01-01"); //Convierte la fecha inicial del producto a un objeto Date
                let productEndDate    = new Date("2000-01-02"); 
                   
                if (product.reservas != "") {
                    productStartDate = new Date(product.reservas.substring(0, product.reservas.indexOf(","))); //Convierte la fecha inicial del producto a un objeto Date
                    productEndDate   = new Date(product.reservas.substring(product.reservas.indexOf(",") + 1)); 
                }

                // Verifica que el rango de fechas del producto no se superponga con el rango de fechas buscado
                return (productEndDate < fechaInicial || productStartDate > fechaFinal);
                
                });
               
            }
            
            setFilteredProducts(filtered); // Actualiza el estado con los productos filtrados
            setCurrentPage(1); // Reset page to 1 whenever filters change
        } else {
            setFilteredProducts(products); // Si no hay estado, muestra todos los productos
        }
    }, [state, products]);

    

 //reservas[reversedIndex].substring(0, reservas[reversedIndex].indexOf(","))
 //reservas[reversedIndex].substring(reservas[reversedIndex].indexOf(",") + 1)

    //useEffect(()=>{console.log(product.reservas);},[product])


    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
      };
    
      const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)));
      };
    
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

      const handleDetailClick = (productId) => {
        navigate(`/Detail2/${productId}`);
    };

    return (
        <div style={{ width: '100%' }}>
        <h1 className="user-filter-container">Resultados de la Búsqueda de Disfraces</h1>
        <div className="products-grid">
            {currentProducts.map(product => ( 
                <CardFilter2 key={product.id} product={product} onDetailClick={() => handleDetailClick(product.id)} />
            ))}
        </div>
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}>Siguiente</button>
        </div>
    </div>
    );
};

export default UserFilter2;