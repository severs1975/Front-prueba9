import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail2.css';
import { useUser } from '../UserContext';
import Calendario2 from '../Components/Calendario/Calendario2';

const Detail2 = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  // Manejar el estado del rango de fechas seleccionado
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  const { user } = useUser();

  // Manejador de evento para el cambio en el rango de fechas seleccionado
  const handleDateRangeChange = (range) => {
    setSelectedDateRange(range); // Actualiza el estado con el rango de fechas seleccionado
  };
  
  // Manejador de evento para el botón "Reservar"
  const handleReservaClick = () => {
    if (user) {
      // Si el usuario está logueado, mostrar el modal
      setShowModal(true);
    } else {
      // Si el usuario no está logueado, mostrar mensaje de advertencia
      alert('Para poder reservar un disfraz, Ud. debe **Iniciar Sesion**');
    }
  };

  return (
    <div className="Detail">
      <div className="Detail-imgContent">
        <img src={product?.imageUrl} alt={product?.name} />
      </div>

      <div className="Detail-textContent">
        <h2>{product?.name}</h2>
        <h1>$ {product?.price}</h1>
        <a>...</a>
        <p>{product?.subCategory} para {product?.mainCategory}</p>
        <p>Talle: {product?.size}</p>
        <a>...</a>
        <p>{product?.largeDescription}</p>
      </div>

      <div className="Detail-calendar">
        <Calendario2 onDateRangeChange={handleDateRangeChange} />
        <button className="Reserva-button" onClick={handleReservaClick}>Reservar</button>
      </div>

      {/* Modal para mostrar cuando el usuario está logueado y hay un rango de fechas seleccionado */}
      {showModal && selectedDateRange && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Rango de fechas seleccionado:</p>
            <p>Inicio: {selectedDateRange.startDate.toDateString()}</p>
            <p>Fin: {selectedDateRange.endDate.toDateString()}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Detail2;