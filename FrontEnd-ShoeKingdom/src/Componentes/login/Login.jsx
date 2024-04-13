import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import Swal from 'sweetalert2'; // Importa SweetAlert2

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  });

  const navigate = useNavigate(); // Obtiene la función de navegación

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
  
        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', token);
  
        // Mostrar Sweet Alert
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido de vuelta!'
        });
  
        // Construir el objeto de usuario con la información recibida del servidor
        const User = {
          id: user.id,
          name: user.name,
          email: user.mail,
          phone: user.phone,
        //   isAdmin: user.isAdmink
        };
  
        // Llama a la función onLogin para pasar los datos del usuario al componente NavBar
        onLogin(User);
  
        navigate('/');
      } else {
        console.error('Error al iniciar sesión.');
      }
    } catch (error) {
      console.error('Error de red:', error);
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
