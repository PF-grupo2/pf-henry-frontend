import React, { useState } from "react";
import axios from "axios";
import { ENUMS } from './enums';

const CreateProdForm = ({ POST_URI }) => {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    style: ENUMS.styles[0],
    gender: ENUMS.genders[2], 
    color: [ENUMS.colors[0]],
    size: [],
    brand: ENUMS.brands[0], 
    price: 0,
    stock: 0,
    scoreAvg: 0.0,
    offer: 0,
    status: true
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log("name", name)
    console.log("value", value)
     
    if (name === "images") {
      if( files.length > 0) {
        const images = Array.from(files).map(file => ({
          file: file,
          preview: URL.createObjectURL(file)
        }));
        setFormData({
          ...formData,
          [name]: images
        })
      } else {
        setFormData({
          ...formData,
          [name]: []
        })
      } 
    } else if (name === "color" || name === "size"){
      setFormData({
        ...formData,
        [name]:[...formData[name], value]
      });
    // } else if (name === "size") {
    //   setFormData({
    //     ...formData,
    //     size:[...formData.size, parseFloat(value)]
    //   });
    } else {   
      setFormData({
        ...formData,
        [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crear un nuevo FormData para cargar las imágenes
      const imageFormData = new FormData();
      formData.images.forEach(image => {
        imageFormData.append('images', image.file);
      });

      // Enviar las imágenes al servidor para cargarlas
      const imageUploadResponse = await axios.post('http://localhost:3000/api/v1/upload/theImages', imageFormData);

      // Extraer las URLs de las imágenes del resultado
      const imageUrls = imageUploadResponse.data.imageUrls;

      // Ahora actualizamos el formData con las URL de las imágenes en lugar de los archivos

      const updatedFormData = { ...formData, images: imageUrls };

      // Enviar el resto de los datos del formulario al servidor para crear el producto
      console.log("Estoy aca:", updatedFormData)
      const productCreationResponse = await axios.post("http://localhost:3000/api/v1/products", updatedFormData);
      
      console.log('Product created:', productCreationResponse.data);
      alert("Producto ingresado a nuestra base de datos")
    } catch (error) {
      console.error('Error creating product:', error);
      alert("Hubo un error al ingresar el producto. Por favor, intentalo de nuevo. ")
    }
  };

  return (
    <div className="container fondo_editar">

 

    <form onSubmit={handleSubmit} className="needs-validation">
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Name:</label>
        <input type="text" id="productName" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        <div className="invalid-feedback">Please enter a product name.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">Description:</label>
        <input type="text" id="productDescription" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        <div className="invalid-feedback">Please enter a product description.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productImages" className="form-label">Images:</label>
        <input type="file" id="productImages" className="form-control" name="images" onChange={handleChange} multiple />
        {formData.images && formData.images.map((image, index) => (
          <img key={index} src={image.preview} alt={`Preview ${index}`} className="img-thumbnail mx-2 my-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        ))}
      </div>
      <div className="mb-3">
        <label htmlFor="productStyle" className="form-label">Style:</label>
        <select id="productStyle" className="form-select" name="style" value={formData.style} onChange={handleChange} required>
          <option value="">Select Style</option>
          {ENUMS.styles.map(style => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
        <div className="invalid-feedback">Please select a product style.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productGender" className="form-label">Gender:</label>
        <select id="productGender" className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
          {ENUMS.genders.map(gender => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>
        <div className="invalid-feedback">Please select a product gender.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productColor" className="form-label">Colors:</label>
        <select id="productColor" className="form-select" name="color" value={formData.color} onChange={handleChange} required>
          {ENUMS.colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
        <div className="invalid-feedback">Please select a product color.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productSize" className="form-label">Sizes:</label>
        <input type="text" id="productSize" className="form-control" name="size" value={formData.size} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="productBrand" className="form-label">Brand:</label>
        <select id="productBrand" className="form-select" name="brand" value={formData.brand} onChange={handleChange} required>
          {ENUMS.brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <div className="invalid-feedback">Please select a product brand.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Price:</label>
        <input type="number" id="productPrice" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        <div className="invalid-feedback">Please enter a valid product price.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productStock" className="form-label">Stock:</label>
        <input type="number" id="productStock" className="form-control" name="stock" value={formData.stock} onChange={handleChange} required />
        <div className="invalid-feedback">Please enter a valid product stock.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="productOffer" className="form-label">Offer:</label>
        <input type="number" id="productOffer" className="form-control" name="offer" value={formData.offer} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="productStatus" className="form-label">Status:</label>
        <select id="productStatus" className="form-select" name="status" value={formData.status} onChange={handleChange} required>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <div className="invalid-feedback">Please select a product status.</div>
      </div>
      <button type="submit" className="btn btn-primary">Create Product</button>
    </form>
  </div>
  );
};

export default CreateProdForm;





// import React, { useState } from "react";
// import axios from "axios";
// import { ENUMS } from './enums';

// const CreateProdForm = () => {

// const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     images: [],
//     style: ENUMS.styles[0],
//     gender: ENUMS.genders[2], 
//     color: ENUMS.colors[0],
//     size: [],
//     brand: ENUMS.brands[0], 
//     price: 0,
//     stock: 0,
//     scoreAvg: 0.0,
//     offer: 0,
//     status: true
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "images"){
//         const files = Array.from(e.target.files);
//         const images = files.map(file => ({
//             file: file,
//             preview: URL.createObjectURL(file)
//         }));
//         setFormData({...formData, images})
//     } else {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//           });
//     }
// };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {

//             const imageUploadPromises = formData.images.map(image =>
//                 axios.post('http://localhost:3000/api/v1/upload/theImages', image.file)
//               );
//               const uploadedImageResponses = await Promise.all(imageUploadPromises);
//               // Extraemos las URL de las imágenes subidas del resultado
//               const imageUrls = uploadedImageResponses.map(response => response.data.imageUrl);
        
//               // Ahora actualizamos el formData con las URL de las imágenes en lugar de los archivos
//               const updatedFormData = { ...formData, images: imageUrls };

//           const response = await axios.post('POST_URI', updatedFormData);
//           console.log('Product created:', response.data);
//           alert("Producto ingresado a nuestra base de datos")
//         } catch (error) {
//           console.error('Error creating product:', error);
//           alert("Hubo un error al ingresar el producto. Por favor, intentalo de nuevo. ")
//         }
//       };


//       return (
//         <div>
//           <h2>Create Product</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </label><br />
//             <label>
//               Description:
//               <input type="text" name="description" value={formData.description} onChange={handleChange} />
//             </label><br />
//             <label>
//           Images:
//           <input type="file" name="images" onChange={handleChange} multiple />
//           {formData.images.map((image, index) => (
//             <img key={index} src={image.preview} alt={`Preview ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
//           ))}
//         </label><br />
//             <label>
//               Style:
//               <select name="style" value={formData.style} onChange={handleChange}>
//                 <option value="">Select Style</option>
//                 {ENUMS.styles.map(style => (
//                   <option key={style} value={style}>{style}</option>
//                 ))}
//               </select>
//             </label><br />
//             <label>
//               Gender:
//               <select name="gender" value={formData.gender} onChange={handleChange}>
//                 {ENUMS.genders.map(gender => (
//                   <option key={gender} value={gender}>{gender}</option>
//                 ))}
//               </select>
//             </label><br />
//             <label>
//               Colors:
//               <select name="color" value={formData.color} onChange={handleChange}>
//              {ENUMS.colors.map(color => (
//                 <option key={color} value={color}>{color}</option>
//              ))}
//              </select>
//             </label><br />
//             <label>
//               Sizes:
//               <input type="text" name="size" value={formData.size} onChange={handleChange} />
//             </label><br />
//             <label>
//               Brand:
//               <select name="brand" value={formData.brand} onChange={handleChange}>
//                 {ENUMS.brands.map(brand => (
//                   <option key={brand} value={brand}>{brand}</option>
//                 ))}
//               </select>
//             </label><br />
//             <label>
//               Price:
//               <input type="number" name="price" value={formData.price} onChange={handleChange} />
//             </label><br />
//             <label>
//               Stock:
//               <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
//             </label><br />
//             <label>
//               Offer:
//               <input type="number" name="offer" value={formData.offer} onChange={handleChange} />
//             </label><br />
//             <label>
//               Status:
//               <select name="status" value={formData.status} onChange={handleChange}>
//                 <option value="true">Active</option>
//                 <option value="false">Inactive</option>
//               </select>
//             </label><br />
//             <button type="submit">Create Product</button>
//           </form>
//         </div>
//       );
//     };


// export default CreateProdForm;

