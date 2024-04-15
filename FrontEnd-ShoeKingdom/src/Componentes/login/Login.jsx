import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch para disparar acciones de Redux
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setToken } from '../../../Redux/Actions/actions'; // Importa la acción setToken

function LoginForm() {
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  });

  const dispatch = useDispatch(); // Obtiene la función dispatch
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const { user, token } = data;

        // Guardar el token en localStorage
        localStorage.setItem('token', token);
        
        // Guardar el token en el estado global de Redux
        dispatch(setToken(token));

        console.log('Token almacenado en estado global de Redux:', token)

        const loggedInUser = {
          id: user.id,
          name: user.name,
          email: user.mail,
          phone: user.phone,
          // isAdmin: user.isAdmin
        };
        console.log("esto es lo que llega al log", loggedInUser)
        // onLogin(loggedInUser);

        navigate('/');

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido de vuelta!'
        });
      } else {
        const errorMessage = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: errorMessage.message || 'Por favor, inténtelo de nuevo más tarde.'
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: 'Ocurrió un error de red. Por favor, inténtelo de nuevo más tarde.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <label htmlFor="loginMail">Correo electrónico:</label><br />
      <input type="email" id="loginMail" name="mail" value={formData.mail} onChange={handleChange} required /><br />
      <label htmlFor="loginPassword">Contraseña:</label><br />
      <input type="password" id="loginPassword" name="password" value={formData.password} onChange={handleChange} required /><br /><br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
