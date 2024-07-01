import React from 'react';
import './Calendario.css';

const Calendario = ({ diaInicio, numeroMes, rangos, esMesActual }) => {
  const diasDeLaSemana = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  const diasDelMes = Array.from({ length: 30 }, (_, i) => i + 1); // Suponiendo un mes de 30 días

  // Crear espacios vacíos para los días antes del inicio
  const espaciosVacios = Array.from({ length: diaInicio }, (_, i) => <div key={`empty-${i}`} className="dia-mes"></div>);

  const esEnRango = (dia) => {
    return rangos.some(rango => dia >= rango.inicio && dia <= rango.fin);
  };

  // Convertir el número del mes en el nombre del mes
  const nombreMes = new Date(2024, numeroMes - 1).toLocaleString('es-ES', { month: 'long' });

  return (
    <div className={`calendario ${esMesActual ? 'mes-actual' : ''}`}>
      <h2 className="mes-nombre">{nombreMes}</h2>
      <div className="dias-semana">
        {diasDeLaSemana.map(dia => (
          <div key={dia} className="dia-semana">{dia}</div>
        ))}
      </div>
      <div className="dias-mes">
        {espaciosVacios}
        {diasDelMes.map(dia => (
          <div
            key={dia}
            className={`dia-mes ${esEnRango(dia) ? 'rango-fecha' : ''}`}
          >
            {dia}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;


