import { useEffect, useState } from 'react';
import { useUser } from '../../src/UserContext';
import "./Perfil.css";

const Perfil = ({ products }) => {
  const { user } = useUser();
  
  const [fechas, setFechas] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [mercaderia, setMercaderia] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const entrega = "Entrega: ";
  const devolucion = "Devolución: ";
  
  useEffect(() => {
    if (user.purchaseHistoryDate && user.purchaseHistorySale && user.purchaseHistoryId) {
      const fechasArray = user.purchaseHistoryDate.split("|");
      const ventasArray = user.purchaseHistorySale.split("|");
      const mercaderiaArray = user.purchaseHistoryId.split("|");

      setFechas(fechasArray);
      setVentas(ventasArray);
      setMercaderia(mercaderiaArray);

      // Filtrar y mapear los productos basados en mercaderiaArray
      const filteredProducts = mercaderiaArray.map(id => 
        products.find(product => product.id.toString() === id)
      ).filter(product => product !== undefined);

      setCurrentProducts(filteredProducts);
    }
  }, [user, products]);

  return (
    <div className='perfilUsuario'>
      <div>
        <h4>
          {`Hola ${user.name} ${user.lastname}, qué grato tenerte por aquí. Te invitamos a revisar tu perfil y el historial de productos con los que hemos interactuado.`}
        </h4>
      </div>

      <div>
        <table className='tablaFilter'>
          <thead>
            <tr>
              <th>{`Nombre: ${user.name} ${user.lastname}`}</th>
              <th>{`Correo: ${user.email}`}</th>
            </tr>
          </thead>
        </table>
      </div>

      <div>
        <h4>Su historial:</h4>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Reservas Realizadas</th>
            </tr>
          </thead>
          <tbody>
            {[...currentProducts].reverse().map((product, index) => {
              const reversedIndex = currentProducts.length - 1 - index;
              return (
                <tr key={`${product.id}-${reversedIndex}`}>
                  <td className='imagenPerfil'>
                    <img src={product.imageUrl} alt={product.name} />
                    <p>{product.name}</p>
                  </td>
                  <td>{ventas[reversedIndex]}</td>
                  <td>
                    <div><p>{entrega + fechas[reversedIndex].substring(0, fechas[reversedIndex].indexOf(","))}</p></div>
                    <div><p>{devolucion + fechas[reversedIndex].substring(fechas[reversedIndex].indexOf(",") + 1)}</p></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Perfil;