import axios from "axios";
import { useState, useEffect } from "react";
import { utilsStorage } from '../utils';

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1/review`;
const URLfront = `http://localhost:5173/product`;

function reviewReviews({ id }) {

    const token = utilsStorage.getDataStorage("token");
    const { isAdmin } = utilsStorage.getDataStorage("reviewSession");
    
    const [reviews, setReviews] = useState([]);

    const fetchData = async () => {
        try {
            console.log("el id es: ",id);
            const { data } = await axios.get(`${URL}/user/${id}`, { headers: { 'x-token': token } });
            setReviews(data);
        } catch (error) {
            console.error("Error getting reviews:", error);
        }
    }

    const handleHide = async (review) => {
        try {
            await axios.delete(`${URL}/review/${review.id}`, { headers: { 'x-token': token } });
            fetchData();
        } catch (error) {
            console.error("Error hiding review:", error);
        }
    }


    useEffect(() => { fetchData() }, []);

    //if(!isAdmin) return <span>No tiene permisos para entrar aquí</span>

    return <div>

        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <div className="container">


                    {/* <a href="nuevo.html" className="btn btn-success">Agregar</a> */}
                    {/* <span>el token es: {token}</span>
                    <button onClick={()=>utilsStorage.removeDataStorage("token")}>borrar token</button> */}
                    <table className="table table-hover table-bordered my-3" aria-describedby="titulo">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">ID del producto</th>
                                <th scope="col">producto</th>
                                <th scope="col">puntuación</th>
                                <th scope="col">comentario</th>
                                <th scope="col">fecha de creación</th>
                                <th scope="col">fecha de edición</th>
                                <th scope="col">acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr> */}
                            {reviews.map(review => (
                                <tr key={review.id}>
                                    <td>{review.id}</td>
                                    <td>{review.ProductId}</td>
                                    <td><a href={`${URLfront}/${id}`}>{review.Product.name}</a></td>
                                    <td>{review.score}</td>
                                    <td>{review.message}</td>
                                    <td>{review.createdAt}</td>
                                    <td>{review.updatedAt}</td>
                                    <td><button onClick={()=>handleHide(review)}>{review.status?"ocultar":"restaurar"}</button></td>
                                    {/* <td>{review.name}</td>
                                    <td>{review.phone}</td>
                                    <td>{review.mail}</td>
                                    { review.mail !== "master@gmail.com" &&(<td>
                                        <button onClick={() => handleBan(review)} className={!review.status ? "btn btn-danger btn-sm me-2" : "btn btn-success btn-sm me-2"}>
                                            {!review.status ? "Desbanear" : "Banear"}
                                        </button>
                                        <button onClick={() => handleAdmin(review)} className={review.isAdmin ? "btn btn-warning btn-sm me-2" : "btn btn-primary btn-sm me-2"}>
                                            {review.isAdmin ? "Quitar admin" : "Dar admin"}
                                        </button>
                                        <button onClick={() => handleOpenForm(review)} className="btn btn-info btn-sm me-2">Editar</button>
                                    </td>)}
                                    {review.mail === "master@gmail.com" && (<td></td>)} */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
}


export default reviewReviews;