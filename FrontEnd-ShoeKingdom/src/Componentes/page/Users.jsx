import axios from "axios";
import { useState, useEffect } from "react";
import EditUser from "./editUserForm";
import UserReviews from "./UserReviews";
import UserSales from "./UserSales";
import { utilsStorage } from "../utils";
import { BASE_URL } from "../../config";

const URL = `${BASE_URL}/users`;

function Users() {
  const token = utilsStorage.getDataStorage("token");
  const { isAdmin } = utilsStorage.getDataStorage("userSession");

  const [users, setUsers] = useState([]);
  const [tabOpen, setTabOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedUser, setSelectedUser] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${URL}/list`, {
        headers: { "x-token": token },
      });
      setUsers(data);
    } catch (error) {
      console.error("Error getting users:", error);
    }
  };

  const handleBan = async (user) => {
    try {
      await axios.put(`${URL}/delete/${user.id}`, {
        headers: { "x-token": token },
      });
      if (user.status === true && user.isAdmin === true) handleAdmin(user);
      fetchData();
    } catch (error) {
      console.error("Error banning user:", error);
    }
  };
  const handleAdmin = async (user) => {
    try {
      await axios.put(`${URL}/admin/${user.id}`, {
        headers: { "x-token": token },
      });
      if (user.status === false && user.isAdmin === false) handleBan(user);
      fetchData();
    } catch (error) {
      console.error("Error changing user permisions:", error);
    }
  };
  const handleOpenTab = (user, tabName) => {
    setSelectedTab(tabName);
    setTabOpen(true);
    setSelectedUser(user);
  };
  const handleCloseTab = () => {
    setSelectedTab("");
    setTabOpen(false);
  };

  const conditionalTab = () => {
    switch (selectedTab) {
      case "edit":
        return (
          <div>
            <button onClick={handleCloseTab} className="btn btn-danger">
              X
            </button>
            <EditUser user={selectedUser} token={token} URL={URL} />
          </div>
        );
      case "reviews":
        return (
          <div>
            <h1>Compras de {selectedUser.name}</h1>
            <button onClick={handleCloseTab} className="btn btn-danger">
              X
            </button>
            <UserReviews id={selectedUser.id} />
          </div>
        );
        case "sales":
        return (
          <div>
            <h1>Compras de {selectedUser.name}</h1>
            <button onClick={handleCloseTab} className="btn btn-danger">
              X
            </button>
            <UserSales user={selectedUser} />
          </div>
        );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isAdmin) return <span>No tiene permisos para entrar aquí</span>;

  return (
    <div>
      <div>
        <main>
          <div className="container">
            {/* <a href="nuevo.html" className="btn btn-success">Agregar</a> */}
            {/* <span>el token es: {token}</span>
                    <button onClick={()=>utilsStorage.removeDataStorage("token")}>borrar token</button> */}
            <table
              className="table table-hover table-bordered my-3"
              aria-describedby="titulo"
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Número</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr> */}
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.mail}</td>
                    {user.mail !== "master@gmail.com" && (
                      <td>
                        <button
                          onClick={() => handleBan(user)}
                          className={
                            !user.status
                              ? "btn btn-danger btn-sm me-2"
                              : "btn btn-success btn-sm me-2"
                          }
                        >
                          {!user.status ? "Desbanear" : "Banear"}
                        </button>
                        <button
                          onClick={() => handleAdmin(user)}
                          className={
                            user.isAdmin
                              ? "btn btn-warning btn-sm me-2"
                              : "btn btn-primary btn-sm me-2"
                          }
                        >
                          {user.isAdmin ? "Quitar admin" : "Dar admin"}
                        </button>
                        <button
                          onClick={() => handleOpenTab(user, "edit")}
                          className="btn btn-info btn-sm me-2"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleOpenTab(user, "reviews")}
                          className="btn btn-info btn-sm me-2"
                        >
                          Reseñas
                        </button>
                        <button
                          onClick={() => handleOpenTab(user, "sales")}
                          className="btn btn-info btn-sm me-2"
                        >
                          Compras
                        </button>
                      </td>
                    )}
                    {user.mail === "master@gmail.com" && <td></td>}
                  </tr>
                ))}
              </tbody>
            </table>

            {tabOpen && conditionalTab()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Users;
