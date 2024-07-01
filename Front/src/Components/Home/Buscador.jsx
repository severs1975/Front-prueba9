import { useEffect, useRef, useState } from "react";
import "./Buscador.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from 'react-router-dom';

const Buscador = ({ products }) => { // Define el componente Buscador que recibe propiedades
    const [open, setOpen] = useState(false); // Estado para controlar apertura del calendario
    const refOne = useRef(null); // Referencia mutable para el componente DateRange
    const [formularioLimpio, setFormularioLimpio] = useState(true); // Estado para formulario limpio
    const [placeholderText, setPlaceholderText] = useState(
        'Fecha de entrega - Fecha de devolución'
    );
    const [range, setRange] = useState([
        { key: 'selection' }
    ]); // Estado para el rango de fechas seleccionado en el calendario
    
    const [consulta, setConsulta] = useState(''); // Estado para la consulta de búsqueda
    const [suggestions, setSuggestions] = useState([]); // Estado para las sugerencias de búsqueda
    
    const navigate = useNavigate(); // Hook para navegación

    const handleConsultaChange = e => { // Maneja cambios en el campo de consulta
        const { value } = e.target;
        setConsulta(value); // Actualiza el estado de consulta con el valor actual del campo de texto
        setFormularioLimpio(false); // Indica que el formulario ya no está limpio

        if (value) {
            const newSuggestions = products
                .filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
                .map(product => product.name);
            setSuggestions([...new Set(newSuggestions)]); // Remueve los duplicados
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setConsulta(suggestion);
        setSuggestions([]);
    };

    const handleRangeChange = newRange => { // Maneja cambios en el rango de fechas
        setRange([newRange.selection]); // Actualiza el rango seleccionado
        setPlaceholderText( // Actualiza el texto con el rango de fechas seleccionadas
            `${format(newRange.selection.startDate, 'yyyy-MM-dd')} - ${format(
                newRange.selection.endDate,
                'yyyy-MM-dd'
            )}`
        );
        setFormularioLimpio(false); // Indica que el formulario ya no está limpio
    };

    const handleSubmit = async e => { // Maneja el envío del formulario al backend
        e.preventDefault(); // Evita el comportamiento predeterminado de envío
        const payload = {}; // Objeto para almacenar los datos del formulario (datos del estado "consulta" y "range")

        // Si se seleccionó un rango de fechas (startDate y endDate no son nulos), las 
        // fechas se formatean en el formato "YYYY-MM-DD" y se agregan al objeto payload 
        // bajo las claves fechaInicial y fechaFinal.
        if (range[0]?.startDate != null && range[0]?.endDate != null) {
            // Cálculos de fecha y hora para el payload
            const year = range[0].startDate.getFullYear();
            const month = range[0].startDate.getMonth() + 1;
            const day = range[0].startDate.getDate();
           
            // Formatear la fecha en el formato "YYYY-MM-DD"
            const fechaInicial = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

            const year1 = range[0].endDate.getFullYear();
            const month1 = range[0].endDate.getMonth() + 1;
            const day1 = range[0].endDate.getDate();

            // Formatear la fecha en el formato "YYYY-MM-DD"
            const fechaFinal = `${year1}-${month1.toString().padStart(2, '0')}-${day1.toString().padStart(2, '0')}`;

            payload.fechaInicial = fechaInicial;
            payload.fechaFinal = fechaFinal;
        }

        if (consulta !== '') { // Verifica si hay una consulta de búsqueda (verifica si el estado "consulta" no esta vacio)
            payload.consulta = consulta; // Agrega la consulta al objeto payload
        }

        console.log(payload);
        navigate('/UserFilter2', { state: payload });
    };

    const limpiarFormulario = () => { // Limpia el formulario y restablece los estados
        setRange([
            { key: 'selection' }
        ]); // Restablece el rango seleccionado
        setConsulta(''); // Limpia la consulta
        setPlaceholderText('Fecha de entrega - Fecha de devolución'); // Restablece el texto del marcador de posición
        setFormularioLimpio(true); // Indica que el formulario está limpio de nuevo
    };

    useEffect(() => { // Efecto para escuchar clics fuera del componente
        document.addEventListener("click", hideOnClickOutside, true); // Agrega evento de escucha al documento
    }, []);

    const hideOnClickOutside = e => { // Función para ocultar el componente al hacer clic fuera de él
        if (refOne.current && !refOne.current.contains(e.target)) { // Verifica si se hizo clic fuera del componente
            setOpen(false);
        }
    };

    return ( // Devuelve la estructura JSX del componente Buscador
        <div className="buscador-container">
            <h2>Encuentra tu disfraz perfecto</h2>
            <p>Explora nuestra amplia colección de disfraces para todas las ocasiones.</p>
            <form onSubmit={handleSubmit} className="form-buscador">
                <div className="buscador-inputs">
                    <input
                        type="text"
                        value={consulta}
                        onChange={handleConsultaChange}
                        placeholder="Ej: <spiderman>"
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
                    <input
                        value={placeholderText}
                        readOnly
                        onClick={() => setOpen(!open)}
                        className="input-fechas"
                    />
                    <button type="submit">
                        Buscar
                    </button>
                    <button
                        type="button"
                        onClick={limpiarFormulario}
                        disabled={formularioLimpio}
                    >
                        Limpiar
                    </button>
                </div>
                {open && (
                    <div ref={refOne}>
                        <DateRange
                            onChange={handleRangeChange}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            rangeColors={['#FFD700']} // Define el color del rango seleccionado
                            months={2}
                            direction="horizontal"
                            className="calendarElement"
                            minDate={addDays(new Date(), 0)} // Establece la fecha mínima como el día actual
                        />
                    </div>
                )}
            </form>
        </div>
    );
};

export default Buscador;