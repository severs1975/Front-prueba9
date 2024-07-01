import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [disfraces, setDisfraces] = useState([]);

  useEffect(() => {
    const fetchDisfraces = async () => {
      try {
        const response = await fetch('http://localhost:8081/disfraces');
        const data = await response.json();
        setDisfraces(data);
      } catch (error) {
        console.error('Error al obtener los disfraces:', error);
      }
    };

    fetchDisfraces();
  }, []);

  return (
    <div className='adm-div'>
      <section className='adm-search'>
        <h1>Bienvenido Administrador</h1>
        <input type="text" placeholder="Buscar producto..." />
      </section>
      <div className="adm-container">
        <section className="adm">
          <Link to={"/admin/AddProduct"}>
            <button className="adm-button">Agregar producto</button>
          </Link>
          <Link to={"/admin/ModifyProduct"}>
            <button className="adm-button">Modificar producto</button>
          </Link>
          <Link to={"/admin/DeleteProduct"}>
            <button className="adm-button">Eliminar producto</button>
          </Link>
          <Link to={"/admin/AdminCaracteristicas"}>
            <button className="adm-button">Administrar Caracteristicas</button>
          </Link>
          <Link to={"#"}>
            <button className="adm-button">Agregar Categoria</button>
          </Link>
        </section>
        <section className='sec-listdo'>
          {disfraces.length > 0 ? (
            <table className="listado">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Categoría</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {disfraces.map((disfraz) => (
                  <tr key={disfraz.id}>
                    <td>{disfraz.codigo}</td>
                    <td>{disfraz.categoria}</td>
                    <td>{disfraz.nombre}</td>
                    <td>{disfraz.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Cargando disfraces...</p>
          )}
        </section>
      </div>
      <div className="adm-mobile-message">
        <p>La sección de administrador solo está disponible en dispositivos de escritorio.</p>
      </div>
    </div>
  );
};

export default Admin;