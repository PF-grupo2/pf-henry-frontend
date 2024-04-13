import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import Swal from 'sweetalert2'; // Importa SweetAlert2

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
    phone: ''
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
      const response = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Usuario registrado exitosamente.');
        // Mostrar Sweet Alert
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Bienvenido! Su cuenta ha sido creada.'
        });
        // Redirigir al usuario a la página principal después de 2 segundos
        setTimeout(() => navigate('/'), 2000);
      } else {
        console.error('Error al registrar el usuario.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <label htmlFor="name">Nombre:</label><br />
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
      <label htmlFor="mail">Correo electrónico:</label><br />
      <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} required /><br />
      <label htmlFor="password">Contraseña:</label><br />
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />
      <label htmlFor="phone">Teléfono:</label><br />
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;