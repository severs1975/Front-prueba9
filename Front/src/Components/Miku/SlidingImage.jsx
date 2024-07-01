import React, { useEffect, useState } from 'react';
import './SlidingImage.css';  // Importa el archivo CSS
import miku from '../../assets/miku.png'

const SlidingImage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`slidingImage-container ${loaded ? 'slide-in' : ''}`}>
      <img src={miku} alt="Imagen deslizante" />
    </div>
  );
};

export default SlidingImage;

