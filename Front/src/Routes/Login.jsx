import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';
import { useUser } from '../../src/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxOusAuK1hvMKTbWHTxYGADsIOUf_UvoGXFF2aD-mkAO_PAL29xeG4dggo0MWNAWFY1mg/exec?action=getUser');
      const data = await response.json();

      const user = data.find(user => user.email === email && user.password === password);

      if (user) {
        console.log('Login exitoso');
        login(user);
        navigate('/');
      } else {
        setError('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
      }
    } catch (error) {
      setError('Error en el inicio de sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="login-wrapper">

      
      <div className='loginAnimation'>
        <AnimationComponent
          effect="cicloInfinito"
          framesFolder="Thor"
          framePrefix="Thor"
          frameQuantity={50}
          frameForSecond={63}
        />
      </div>
      
      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title">ACCESO</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input type="checkbox" id="mantenerConectado" className="checkbox-input" />
              <label htmlFor="mantenerConectado" className="checkbox-label">
                Mantenerme Conectado
              </label>
              <label htmlFor="Olvidaste tu contraseña" className="forgot-password-label">
                <Link to={"#"} className="forgot-password-link">
                  ¿Olvidaste tu contraseña?
                </Link>
              </label>
            </div>
            <button type="submit" className="login-button">
              Acceder
            </button>
            <p className="register-link">
              ¿No tienes una cuenta? <Link to="/Register" className="register-link-text">Regístrate!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;