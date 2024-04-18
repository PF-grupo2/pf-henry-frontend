import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";

function EditProduct({ product, token }) {
  const [formData, setFormData] = useState({
    name: product.name,
    brand: product.brand,
    price: product.price,
    description: product.description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async () => { 
    const Response = await axios.put(`${BASE_URL}/products/edit/${product.id}`, formData, {
      headers: { 
        "x-token": token,
      },  
    });
  };

  useEffect(() => {
    setFormData({
      name: product.name,
      brand: product.brand,
      price: product.price,
      description: product.description
    });
  }, [product]);

  useEffect(() => {
    console.log(formData);
  }, [formData]); 

  return (
    <div className="container fondo_editar">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Marca:
          </label>
          <input
            type="text"
            id="brand"
            className="form-control"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Descripcion:
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
