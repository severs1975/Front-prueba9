// Popup.jsx
import React from 'react';
import './Poppup.css';

const Popup = ({ children, togglePopup }) => {
  
  const handleClick = (e) => {
    e.stopPropagation(); // Detener la propagación del evento de clic
  };

  return (
    <div className="popup" onClick={handleClick}>
      {children}
      <button onClick={togglePopup}>Cerrar</button>
    </div>
  );
};

export default Popup;