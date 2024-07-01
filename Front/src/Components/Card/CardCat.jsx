import "./Card.css";

const CardCat = ({ product }) => {

    if (!product || !product.id || !product.name ||!product.mainCategory|| !product.description || !product.price || !product.imageUrl) {
        return null; // O puedes renderizar un componente de carga o un mensaje de error
      }
    
      const { id, name, mainCategory, description, price, imageUrl } = product;
    
      return (
        <div className="card">
          <div className="imageContent">
          <h3>{mainCategory}</h3>
          <img src={imageUrl} alt={name} />
          </div>
        </div>
      );

}

export default CardCat