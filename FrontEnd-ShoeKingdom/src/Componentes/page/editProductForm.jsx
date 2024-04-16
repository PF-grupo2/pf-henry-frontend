import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EditProduct({ product, token, URL }) {
  const [formData, setFormData] = useState({
    name: product && product.name,
    brand: product && product.brand,
    price: product && product.price
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
    await axios.put(`${URL}/update/${product.id}`,formData, {headers: {'x-token': token}});
  };

  useEffect(()=>{setFormData({
    name: product.name,
    brand: product.brand,
    price: product.price
  })}, [product])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Editar el Producto: {product.name}</h2>
            <label htmlFor="name">Nombre:</label><br />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
            <label htmlFor="brand">Marca:</label><br />
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required /><br />
            <label htmlFor="price"> Precio:</label><br />
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} /><br />
            <label htmlFor="phone">Teléfono:</label><br />
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
            <button type="submit">Actualizar</button>
        </form>
    </div>
  );
}

export default EditProduct;