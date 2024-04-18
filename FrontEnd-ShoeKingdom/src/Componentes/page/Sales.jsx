import axios from "axios";
import { useState, useEffect } from "react";
import { utilsStorage } from "../utils";
import { BASE_URL, BASE_URL_FRONT } from "../../config";

const URL = `${BASE_URL}/sale`;
const URLfront = `${BASE_URL_FRONT}/product`;

function Sales() {
  const token = utilsStorage.getDataStorage("token");
  const { isAdmin } = utilsStorage.getDataStorage("userSession");

  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/v1/sale/list`, {
        headers: { "x-token": token },
      });
      setSales(data);
    } catch (error) {
      console.error("Error getting sales:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isAdmin) return <span>No tiene permisos para entrar aquí</span>;
  if (sales.length===0) return <h2>No se han realizado compras</h2>;

  return (
    <div>
      <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <div className="container">
            <table
              className="table table-hover table-bordered my-3"
              aria-describedby="titulo"
            >
              <thead className="table-dark">
                <tr>
                    <th scope="col">usuario</th>
                    <th scope="col">fecha</th>
                    <th scope="col">productos</th>
                    <th scope="col">total</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr> */}
                {sales.map((review) => (
                  <tr key={review.id}>
                    <td>{review.User.name}</td>
                    <td>{review.date}</td>
                    <td>{review.SaleDetails.map(detail=>`Producto: (${detail.amount}(unidades) ${detail.title}) `)}</td>
                    <td>{review.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Sales;