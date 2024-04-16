import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import Swal from 'sweetalert2'; // Importa SweetAlert2
import * as Yup from "yup"; //Importa Yup para validaciones del Form


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
    phone: ''
  });
  
  const navigate = useNavigate(); // Obtiene la función de navegación

  const [errors, setErrors] = useState({});

  const formValidation = Yup.object({
    name: Yup.string().required("Tu Nombre es requerido."),
    mail: Yup.string().required("Tu Correo electrónico es requerido.").email("Formato de Correo electrónico invalido"),
    password: Yup.string().required("Contraseña requerida").min(5, "La Contraseña debe tener al menos 5 caracteres").matches(/[!@#$%^&*(),.?":{}|<>]/, "La Contraseña debe tener al menos 1 simbolo"), //puede implementarse: .matches(/[0-9]/, "Password must contain at least one number").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    phone: Yup.string().matches(/^\d{10}$/,"El numero de Teléfono debe tener 10 digitos").required(),
  })

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Esto es lo que llega a body", formData)
    
    try {
      
      await formValidation.validate(formData, {abortEarly: false});
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }

    try{ const response = await fetch('https://pf-henry-backend-agsr.onrender.com/api/v1/users/register', {
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
      
      <div> 
        <label htmlFor="name">Nombre:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br/>
         {errors.name && <div className="error">{errors.name}</div>}
      </div>
      
      <div>
        <label htmlFor="mail">Correo electrónico:</label><br />
        <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} required /><br/>
        {errors.mail && <div className="error">{errors.mail}</div>}
      </div>
      
      <div>
        <label htmlFor="password">Contraseña:</label><br />
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br/>
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      
      <div>
        <label htmlFor="phone">Teléfono:</label><br />
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br/>
        {errors.phone && (<div className="error">{errors.phone}</div>)}
      </div>
      
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;