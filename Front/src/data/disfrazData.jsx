import React, { useEffect, useState } from 'react';

const disfrazData = () => {
    const [disfraces, setDisfraces] = useState([]);
  
    useEffect(() => {
      fetch('/api/disfraces')
        .then((response) => response.json())
        .then((data) => setDisfraces(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h1>Disfraces</h1>
        <ul>
          {disfraces.map((disfraz, index) => (
            <li key={index}>
              {disfraz.nombre} - {disfraz.precio} - {disfraz.cantidad}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default disfrazData