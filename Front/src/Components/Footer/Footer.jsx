import './Footer.css';

import icoface from "../../assets/iconos/ico-facebook.png";
import icoinsta from "../../assets/iconos/ico-instagram.png";
import icotiktok from "../../assets/iconos/ico-tiktok.png";
import icowpp from "../../assets/iconos/ico-whatsapp.png";
import { useEffect, useState } from 'react';
import AnimationComponent from '../AnimationComponent/AnimationComponent';
import { Link } from 'react-router-dom';

const Footer = () => {
const currentYear = new Date().getFullYear();

return (

  <footer className="footer">
  <div className="container">
    <div className="footer-content">
      
          <AnimationComponent
          effect="repetirUna"
          framesFolder="LogoMov"
          framePrefix="LogoMov"
          frameQuantity={30}
          frameForSecond={30}/>

      
      <p className="footer-copyright">
        &copy; {currentYear} Disfrazlandia. Todos los derechos reservados.
      </p>
      <div className="footer-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoface} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoinsta} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icotiktok} alt="TikTok" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icowpp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  </div>
  
</footer>
);
};

export default Footer;