import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditUser({ user, token, URL }) {
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

  const handleSubmit = async () => {
    await axios.put(`${URL}/update/${user.id}`, formData, { headers: { 'x-token': token } });
  };

  useEffect(() => {
    setFormData({
      name: user.name,
      mail: user.mail,
      phone: user.phone
    })
  }, [user])

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
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
        </form> */}



      <section class=" gradient-custom fondo_editar">
        <div class="container">
          <h4>Editar el Usuario: {user.name} </h4>
          <div class="row">
            <div>
              <form novalidate onSubmit={handleSubmit}>
                <div class="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" class="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

                </div>
                <div class="form-group">
                  <label htmlFor="mail">Correo electrónico:</label>
                  <input type="email" class="form-control" id="mail" name="mail" value={formData.mail} onChange={handleChange} required /><br />
                </div>
                <div class="form-group">
                  <label htmlFor="password">Contraseña (opcional):</label>
                  <input type="password" class="form-control" id="password" name="password" value={formData.password} onChange={handleChange} /><br />
                </div>
                
                <div class="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" class="form-control"  id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br />
                        </div>
                <button class="btn btn-dark">
                  Actualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


















    </div>
  );
}

export default EditUser;