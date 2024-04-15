import axios from "axios";
import { useState, useEffect } from "react";
import EditProduct from "./editProductForm";
import CreateProdForm from "./createProduct";

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1/products/listProducts`;

const POST_URI = `http://localhost:${PORT}/api/v1/products`



const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZjQzMGYzLTc3NzgtNGZiZC05MGNhLTJmMDIyY2JkMjgwZCIsImlhdCI6MTcxMzAzMzI5NSwiZXhwIjoxNzEzMDQ0MDk1fQ.XUyp6UfXD6eizo5fqG7UWQ3IsIytCzgvBDUaqY1O39Y"


function Products() {

    const [products, setProducts] = useState([]);
    const [editorOpen, setEditorOpen] = useState(false);
    const [creatorOpen, setCreatorOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState();

    const fetchData = async()=> {
        try{
            const { data } = await axios.get(URL, {headers: {'x-token': token}});
            if (data.products && Array.isArray(data.products)) {
              setProducts(data.products);
            } else {
              console.error("La respuesta de la API no contiene un array de productos")
            }
        } catch(error){
            console.error("Error getting products:", error);
        }
    }

    const handleBan = async(id)=>{
        try{
            await axios.put(`${URL}/delete/${id}`, {headers: { 'x-token': token }});
            fetchData();
        }catch(error){
            console.error("Error banning product:", error);
        }
    }
    // const handleAdmin = async(id)=>{
    //     try{
    //         await axios.put(`${URL}/admin/${id}`, {headers: { 'x-token': token }});
    //         fetchData();
    //     }catch(error){
    //         console.error("Error changing user permisions:", error);
    //     }
    // }
    const handleOpenForm = (product)=>{
        setEditorOpen(true);
        setSelectedProduct(product);
    }
    const handleCloseForm = ()=>{
        setEditorOpen(false);
    }
    
    const handleOpenCreator = () =>{
        setCreatorOpen(true);
    }
    const handleCloseCreator = () =>{
        setCreatorOpen(false)
    }

    useEffect(()=>{fetchData()}, []);

    return <div>
            <button onClick={handleOpenCreator}>Ingresar Nuevo Producto</button>
            {products.map(product => <div key={product.id}>
                <span>Nombre: {product.name}</span>
                <span>Marca: {product.brand}</span>
                <span>Precio: {product.brand}</span>
                {/* <span>Imagen: {product.image}</span> */}
                <button onClick={()=> handleBan(product.id)}>{product.status===true?"banear":"desbanear"}</button>
                {/* <button onClick={()=> handleAdmin(user.id)}>{user.isAdmin===true?"quitar admin":"dar admin"}</button> */}
                <button onClick={()=> handleOpenForm(product)}>editar</button>
                </div>)
            }
            {editorOpen && <div>
                    <button onClick={handleCloseForm}>X</button>
                    <EditProduct product={selectedProduct} token={token} URL={URL}/>
                </div>
            }
            {creatorOpen && <div>
                    <button onClick={handleCloseCreator}>X</button>
                    <CreateProdForm POST_URI={POST_URI} />
                </div>
            }

        </div>
  }

  
  export default Products;