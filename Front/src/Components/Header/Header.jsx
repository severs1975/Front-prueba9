import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from "../../assets/HamburguesaIcon/menu.svg";
import closeIcon from "../../assets/HamburguesaIcon/close.svg";
import './Header.css';
import AnimationComponent from '../AnimationComponent/AnimationComponent';
import { useUser } from '../../../src/UserContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const getInitials = () => {
    if (user) {
      const firstInitial = user.name.charAt(0).toUpperCase();
      const lastInitial = user.lastname.charAt(0).toUpperCase();
      return `${firstInitial}${lastInitial}`;
    }
    return '';
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <Link to="/">
          <AnimationComponent
            effect="repetirUna"
            framesFolder="LogoMov"
            framePrefix="LogoMov"
            frameQuantity={30}
            frameForSecond={30}
          />
        </Link>
      </div>

      <div className='header__right'>
        {user ? (
          <>
            <div className="header__user">
              <Link to={"/Perfil"}>
                <div className="header__user-initials">
                  {getInitials()}
                </div>
              </Link>
              <Link className="header__logout" to={"/"}>
              <button className="header__logout"  onClick={handleLogout}>
                Cerrar sesión
              </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link className='headerRegisterDiv' to={"/Register"}>
              <button className='header__button b2'>Crear cuenta</button>
            </Link>
            <Link className='headerRegisterDiv' to={"/Login"}>
              <button className='header__button b1'>Iniciar sesión</button>
            </Link>
            <button className='header__hamburger' onClick={toggleMenu}>
              <img src={isOpen ? closeIcon : menuIcon} alt="Menu" />
            </button>
          </>
        )}
      </div>
      {isOpen && !user && (
        <div className='header__menu'>
          <Link to="/Register" className='header__menu-item'>Crear cuenta</Link>
          <Link to="/Login" className='header__menu-item'>Iniciar sesión</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
/*
<SlidingImage  />
<SlidingImage_1 />*/