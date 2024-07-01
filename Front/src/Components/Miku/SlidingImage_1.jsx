import React, { useEffect, useState } from 'react';
import './SlidingImage_1.css';  // Importa el archivo CSS
import villano from '../../assets/miVillano.png'

const SlidingImage_1 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`sliding_1Image-container ${loaded ? 'slide-in' : ''}`}>
      <img src={villano} alt="Imagen deslizante" />
    </div>
  );
};

export default SlidingImage_1;

