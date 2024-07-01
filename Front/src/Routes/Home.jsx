import React, { useState, useEffect } from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { useNavigate } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";
import Buscador from "../Components/Home/Buscador";

const Home = ({ products, onAddProduct  }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const handleSearch = (searchParams) => {
    // Aquí puedes filtrar los productos o realizar cualquier acción de búsqueda
    console.log(searchParams);
  };


  /*const handleLupaClick = () => {
    navigate('/userFilter');
  };*/

  return (
    <div className="home">
      <section>
        <Buscador onSearch={handleSearch} /> {/* se inserta el componente Buscador */}
      </section>
      
      <Categorias products={products}/>

      <ProductList products={localProducts} onAddProduct={onAddProduct}/>
    
    </div>
  );
};

export default Home;





/*<section className="buscador">
        <h2>Encuentra tu disfraz perfecto</h2>
        <div>
          <p>Explora nuestra amplia colección de disfraces para todas las ocasiones. Utiliza la lupa para encontrar lo que necesitas</p>
        </div>
        <div>
          <img className='lupa' src={lupa} alt="Buscar" onClick={handleLupaClick} />
        </div>
      </section>
*/