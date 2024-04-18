import axios from "axios";
import { useState, useEffect } from "react";
import EditProduct from "./editProductForm";
import CreateProdForm from "./createProduct";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProductsReview from "./ProductsReview";
import { BASE_URL } from "../../config";
import { utilsStorage } from "../utils";

function Products() {
  const token = utilsStorage.getDataStorage("token");
  const { isAdmin } = utilsStorage.getDataStorage("userSession");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewProductId, setReviewProductId] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products/listProducts`, { headers: { "x-token": token } });
      if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        console.error("La respuesta de la API no contiene un array de productos");
      }
    } catch (error) {
      console.error("Error getting products:", error);
    }
  };

  const handleBan = async (id) => {
    try {
      await axios.put(`${BASE_URL}/delete/${id}`, {}, { headers: { "x-token": token } });
      fetchData();
    } catch (error) {
      console.error("Error banning product:", error);
    }
  };

  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleOpenReviewModal = (productId) => {
    setReviewProductId(productId);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setReviewProductId(null);
    setShowReviewModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={handleOpenCreateModal}>Ingresar Nuevo Producto</Button>
      </div>
      <table className="table table-hover table-bordered my-3" aria-describedby="titulo">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Marca</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="info" onClick={() => handleOpenEditModal(product)}>Editar</Button>
                <Button variant={!product.status ? "danger" : "success"} onClick={() => handleBan(product.id)}>{!product.status ? "Desbanear" : "Banear"}</Button>
                <Button variant="info" onClick={() => handleOpenReviewModal(product.id)}>Reseñas</Button>
                {/* <Button variant={product.isAdmin ? "warning" : "primary"} onClick={() => handleAdmin(product.id)}>{product.isAdmin ? "Quitar admin" : "Dar admin"}</Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto: {selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProduct product={selectedProduct} token={token} />
        </Modal.Body>
      </Modal>
      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProdForm />
        </Modal.Body>
      </Modal>
      <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reseñas del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductsReview id={reviewProductId} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Products;