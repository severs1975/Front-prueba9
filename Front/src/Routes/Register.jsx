import { useEffect, useState } from 'react';
import './Register.css';
import './Login.css';
import { Link } from 'react-router-dom';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch existing users from the API
    fetch("https://script.google.com/macros/s/AKfycbxOusAuK1hvMKTbWHTxYGADsIOUf_UvoGXFF2aD-mkAO_PAL29xeG4dggo0MWNAWFY1mg/exec?action=getUser")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, password: "Las claves no coinciden" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: "" }));
    return true;
  };

  const validateEmail = () => {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      setErrors((prev) => ({ ...prev, email: "El usuario ya está registrado" }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: "" }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePasswords() || !validateEmail()) {
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbwJCA0KZPHtTZONu7MUonjv2csv-CaY_Dvm1CUqHDSJoWcNJh4ndn0mYPHm7RbczoYdtw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="register-wrapper">
      <div className="registerAnimationComponent">
        <AnimationComponent 
          effect="repetirUna"
          framesFolder="DarkVader"
          framePrefix="DarkVader"
          frameQuantity={48}
          frameForSecond={50}
        />
      </div>

      <div className="register-container">
        <h2 className="register-title">REGISTRATE</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <input className="form-input" placeholder="nombre" name="Name" type="text" onChange={(e) => setNombre(e.target.value)} />
          <input className="form-input" placeholder="apellido" name="LastName" type="text" onChange={(e) => setApellido(e.target.value)} />
          <input className="form-input" placeholder="email" name="Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <input className="form-input" placeholder="clave" name="Message" type="password" onChange={(e) => setPassword(e.target.value)} />
          <input className="form-input" placeholder="validar" name="Message2" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.password && <p className="error-message">{errors.password}</p>}
          <input className="login-button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
