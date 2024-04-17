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

  const handleSubmit = async () => {
    await axios.put(`${URL}/update/${product.id}`, formData, { headers: { 'x-token': token } });
  };

  useEffect(() => {
    setFormData({
      name: product.name,
      brand: product.brand,
      price: product.price
    });
  }, [product]);

  return (
    <div className="container fondo_editar">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Marca:</label>
          <input type="text" id="brand" className="form-control" name="brand" value={formData.brand} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio:</label>
          <input type="number" id="price" className="form-control" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input type="tel" id="phone" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  );
}

export default EditProduct;