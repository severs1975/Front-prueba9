import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Calendario2.css";
import es from "date-fns/locale/es";

function Calendario2({ onDateRangeChange }) {

  const [monthsToShow, setMonthsToShow] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );
 
 const now = new Date(); // Fecha y hora actual en el huso horario local
 const offset = now.getTimezoneOffset() * 60000; // Offset en milisegundos
  
  // Crear las fechas para startDate y endDate ajustadas al huso horario de Argentina (UTC-3)
  const startDate = new Date(now - offset - (3 * 60 * 60 * 1000)); // Restar 3 horas en milisegundos
  const endDate = new Date(now - offset - (3 * 60 * 60 * 1000)); // Restar 3 horas en milisegundos
  
  const [selectionRange, setSelectionRange] = useState({
    startDate,
    endDate,
    key: "selection",
  });
//permiten mantener y actualizar dinámicamente el rango de fechas seleccionadas 
//(selectionRange) en el componente "calendario". Esto es esencial para 
//gestionar las interacciones del usuario con el calendario, como seleccionar un rango 
//de fechas para una reserva.

const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    onDateRangeChange(ranges.selection); // Llama a la función pasada por prop para enviar el rango seleccionado
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMonthsToShow(1);
      } else {
        setMonthsToShow(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div className="calendario-card">
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          rangeColors={["#FFFF00"]}
          showDateDisplay={false}
          months={monthsToShow}
          direction="horizontal"
          locale={es}
          minDate={new Date()}
        />
      </div>
  );
}

export default Calendario2;