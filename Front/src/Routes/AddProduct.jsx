import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ products, onAddProduct }) => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Definir el ArrayCat dentro del componente
  const ArrayCat = [
    { id: 1, nombre: 'Mujer' },
    { id: 2, nombre: 'Hombre' },
    { id: 3, nombre: 'Niños y niñas' },
    { id: 4, nombre: 'Mascotas' },
   
  ];

  const handleSubmit = async (e) => {
    // ... (el resto del código de handleSubmit permanece igual)
  };

  const resetFormFields = () => {
    // ... (el resto del código de resetFormFields permanece igual)
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}
        {successMessage && <div className="form-success">{successMessage}</div>}
        <input
          type="text"
          placeholder="Código del producto"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="form-input"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          className="form-select"
        >
          <option value="">Selecciona una categoría</option>
          {ArrayCat.map((cat) => (
            <option key={cat.id} value={cat.nombre}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Descripción del producto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          className="form-textarea"
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="form-submit">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;






//----------------------------------------------------------NO BORRAR-------------------------------------------------------------------------------------



/*import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ products, onAddProduct }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProduct = products.find((product) => product.name === name);
    if (existingProduct) {
      setError('El nombre del producto ya está en uso');
      return;
    }
    const newId = products.length + 1;
    const newProduct = {
      id: newId,
      name,
      code,
      price: parseFloat(price),
      description,
      imageUrls,
    };
    console.log('Nuevo producto:', newProduct);
    onAddProduct(newProduct);
    setName('');
    setCode('');
    setPrice('');
    setDescription('');
    setImageUrls(['']);
    setError('');
    setSuccessMessage('Este artículo fue agregado correctamente');
  };

  const handleImageUrlChange = (e, index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = e.target.value;
    setImageUrls(newImageUrls);
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrl = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };


  //PRUEBA DE ENDPOINT 

  // Aca estamos consumiendo las API que nosotros desarrollamos con el endpoint de validar. ✅

  //Ya presenta con las validaciones de las DTOs, esta la imagen en BACK ✅

async function agregarDisfraz(disfraz) {
  try {
      const response = await fetch('http://localhost:8081/disfraces/registrar', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(disfraz),
      });

      if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const data = await response.text();
      console.log(data);
  } catch (error) {
      console.error('Error al agregar disfraz:', error);
  }
}

// Ejemplo de uso
const nuevoDisfraz = {
  fecha: '2024-10-11',
  nombre: 'batman',
  descripcion: 'Descripción donde vamos a tener las validaciones respectivas para la creación del objeto.',
  precio: 3200.00,
  imagen: 'http://stallone.com',
};



agregarDisfraz(nuevoDisfraz);



  return (
    <div className="form-container">
      <h2 className="form-title">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}
        {successMessage && <div className="form-success">{successMessage}</div>}
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Código del producto"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="form-input"
        />
        <textarea
          placeholder="Descripción del producto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        />

        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="form-select"
        >
          <option value="">Seleccionar categoría</option>
          <option value="nino-nina">Niño/a</option>
          <option value="mascotas">Mascotas</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <div className="form-section">
          <h3 className="form-section-title">Imágenes</h3>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="form-image-input">
              <input
                type="text"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(e) => handleImageUrlChange(e, index)}
                className="form-input"
              />
              {index > 0 && (
                <span
                  className="form-image-remove"
                  onClick={() => removeImageUrl(index)}
                >
                  Eliminar
                </span>
              )}
            </div>
          ))}
          <button type="button" onClick={addImageUrl} className="form-add-image">
            Agregar imagen
          </button>
        </div>
        <button type="submit" className="form-submit">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;*/
