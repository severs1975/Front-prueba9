// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './UserFilter.css';
import CardAdmin from '../Components/Card/CardAdmin';
import Card from '../Components/Card/Card';
import CardFilter from '../Components/Card/CardFilter';

const UserFilter = ({ products }) => {
  const [filter, setFilter] = useState({
    mainCategory: '',
    subCategory: '',
    priceRange: '',
    name: '',
    size: ''
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [suggestions, setSuggestions] = useState([]);

  
  /*useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'https://script.google.com/macros/s/AKfycbxcw4Xd2EnawRGY5lp3xwr8q-5CuVj1TkzPy1QBgih-h0mzA_wJ3ichk-GUNQujzyE3/exec?action=getProduct';
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Inicialmente muestra todos los productos
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchProducts();
  }, []);*/

  useEffect(() => {
    let filtered = products;

    if (filter.mainCategory) {
      filtered = filtered.filter(product => product.mainCategory === filter.mainCategory);
    }
    if (filter.subCategory) {
      filtered = filtered.filter(product => product.subCategory === filter.subCategory);
    }
    if (filter.priceRange) {
      const [min, max] = filter.priceRange.split('-').map(parseFloat);
      filtered = filtered.filter(product => {
        const price = product.price;
        return price >= min && (max === undefined || price <= max);
      });
    }
    if (filter.name) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(filter.name.toLowerCase()));
    }
    if (filter.size) {
      filtered = filtered.filter(product => product.size === filter.size);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset page to 1 whenever filters change
  }, [filter, products]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });

    if (name === 'name' && value) {
      const newSuggestions = products
        .filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
        .map(product => product.name);
      setSuggestions([...new Set(newSuggestions)]); // Remove duplicates
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFilter({ ...filter, name: suggestion });
    setSuggestions([]);
  };

  const resetFilters = () => {
    setFilter({
      mainCategory: '',
      subCategory: '',
      priceRange: '',
      name: '',
      size: ''
    });
    setFilteredProducts(products);
    setSuggestions([]);
  };

  const handleModal = (type, product) => {
    if (type === 'view') {
      setModalContent(<CardAdmin product={product} />);
    } else {
      setModalContent(<p>Estamos trabajando, ¡próximamente!</p>);
    }
  };

  const handleModalClose = () => {
    setModalContent(null);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredProducts.length / productsPerPage)));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h3>Bienvenidos a Nuestra Sección de Búsqueda de Disfraces</h3>
      <div className="filters">
        <select 
        name="mainCategory" 
        onChange={handleFilterChange} 
        value={filter.mainCategory} 
        placeholder="Categoría principal">
          <option className='optionFilter' value="">Categoría principal</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Niños">Niños</option>
          <option value="Mascotas">Mascotas</option>
        </select>
        <select 
        name="subCategory" 
        onChange={handleFilterChange} 
        value={filter.subCategory} 
        placeholder="Categoría secundaria">
          <option value="">Categoría secundaria</option>
          {[...new Set(products.map(p => p.subCategory))].map(subCat => (
            <option key={subCat} value={subCat}>{subCat}</option>
          ))}
        </select>
        <select 
        name="priceRange" 
        onChange={handleFilterChange} 
        value={filter.priceRange} 
        placeholder="Precio">
          <option value="">Precio</option>
          <option value="0.00-10.00">0.00-10.00</option>
          <option value="10.01-20.00">10.01-20.00</option>
          <option value="20.01-30.00">20.01-30.00</option>
          <option value="30.00-Infinity">30.00 y más</option>
        </select>
        <div className="filter-container">
          <input 
            type="text" 
            name="name" 
            onChange={handleFilterChange} 
            value={filter.name} 
            placeholder="Nombre" 
            autoComplete="off" 
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select 
        name="size" 
        onChange={handleFilterChange} 
        value={filter.size} 
        placeholder="Talla">
          <option value="">Talle</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button onClick={resetFilters}>Resetear filtros</button>
      </div>
      <div className='galeryFilter'>
        {currentProducts.map(product => (
          <div key={product.id}>
            <CardFilter product={product} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}>Siguiente</button>
      </div>
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            {modalContent}
            <button onClick={handleModalClose}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFilter;