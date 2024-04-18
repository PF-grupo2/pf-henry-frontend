import axios from "axios";
import { useState, useEffect } from "react";
import { utilsStorage } from "../utils";
import { BASE_URL, BASE_URL_FRONT } from "../../config";

const URL = `${BASE_URL}/review`;

function Reviews() {
  const token = utilsStorage.getDataStorage("token");
  const { isAdmin } = utilsStorage.getDataStorage("userSession");

  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${URL}/review`, {
        headers: { "x-token": token },
      });
      console.log(data);
      setReviews(data);
    } catch (error) {
      console.error("Error getting reviews:", error);
    }
  };

  const handleHide = async (review) => {
    try {
      await axios.delete(`${URL}/review/${review.id}`, {
        headers: { "x-token": token },
      });
      fetchData();
    } catch (error) {
      console.error("Error hiding review:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isAdmin) return <span>No tiene permisos para entrar aquí</span>;
  if (!reviews) return <span>No se han publicado reseñas</span>;
    if(!isAdmin) return <span>No tiene permisos para entrar aquí</span>
    if(reviews.length===0) return <span>El usuario no ha publicado reseñas</span>

    return <div>

        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <div className="container">
                    <table className="table table-hover table-bordered my-3" aria-describedby="titulo">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">ID del producto</th>
                                <th scope="col">producto</th>
                                <th scope="col">ID del usuario</th>
                                <th scope="col">usuario</th>
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
                                    <td><a href={`${URLfront}/${review.id}`}>{review.Product.name}</a></td>
                                    <td>{review.UserId}</td>
                                    <td>{review.User.name}</td>
                                    <td>{review.score}</td>
                                    <td>{review.message}</td>
                                    <td>{review.createdAt}</td>
                                    <td>{review.updatedAt}</td>
                                    <td><button onClick={()=>handleHide(review)}>{review.status?"ocultar":"restaurar"}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>

    </div>
}

export default Reviews;
