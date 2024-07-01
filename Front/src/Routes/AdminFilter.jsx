import React, { useState, useEffect } from 'react';
import './AdminFilter.css';
import CardAdmin from '../Components/Card/CardAdmin'; // Asegúrate de tener este componente

const AdminFilter = () => {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
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
  }, []);

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
      <div className="filters">
        <select name="mainCategory" onChange={handleFilterChange} value={filter.mainCategory} placeholder="Categoría principal">
          <option className='optionFilter' value="">Categoría principal</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Niños">Niños</option>
          <option value="Mascotas">Mascotas</option>
        </select>
        <select name="subCategory" onChange={handleFilterChange} value={filter.subCategory} placeholder="Categoría secundaria">
          <option value="">Categoría secundaria</option>
          {[...new Set(products.map(p => p.subCategory))].map(subCat => (
            <option key={subCat} value={subCat}>{subCat}</option>
          ))}
        </select>
        <select name="priceRange" onChange={handleFilterChange} value={filter.priceRange} placeholder="Precio">
          <option value="">Precio</option>
          <option value="0.00-10.00">0.00-10.00</option>
          <option value="10.01-20.00">10.01-20.00</option>
          <option value="20.01-30.00">20.01-30.00</option>
          <option value="30.00 y más">30.00 y más</option>
        </select>
        <input type="text" name="name" onChange={handleFilterChange} value={filter.name} placeholder="Nombre" />
        <select name="size" onChange={handleFilterChange} value={filter.size} placeholder="Talla">
          <option value="">Talla</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button onClick={resetFilters}>Resetear filtros</button>
      </div>
      <table className='tablaFilter'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría Principal</th>
            <th>Categoría Secundaria</th>
            <th>Talla</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.mainCategory}</td>
              <td>{product.subCategory}</td>
              <td>{product.size}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleModal('view', product)}>👁</button>
                <button onClick={() => handleModal('edit', product)}>🖉</button>
                <button onClick={() => handleModal('delete', product)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default AdminFilter;


