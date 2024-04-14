import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditUser({user, token, URL}) {
  const [formData, setFormData] = useState({
    name: user.name,
    mail: user.mail,
    phone: user.phone
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(formData);
  };

  const handleSubmit = async() => {
    await axios.put(`${URL}/update/${user.id}`,formData, {headers: {'x-token': token}});
  };

  useEffect(()=>{setFormData({
    name: user.name,
    mail: user.mail,
    phone: user.phone
  })}, [user])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Editar el Usuario: {user.name}</h2>
            <label htmlFor="name">Nombre:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
            <label htmlFor="mail">Correo electrónico:</label><br />
            <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} required /><br />
            <label htmlFor="password">Contraseña (opcional):</label><br />
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /><br />
            <label htmlFor="phone">Teléfono:</label><br />
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
            <button type="submit">Actualizar</button>
        </form>
    </div>
  );
}

export default EditUser;