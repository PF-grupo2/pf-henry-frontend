import axios from "axios";
import { useState, useEffect } from "react";
import EditUser from "./editUserForm";

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1/users`;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZjQzMGYzLTc3NzgtNGZiZC05MGNhLTJmMDIyY2JkMjgwZCIsImlhdCI6MTcxMzAzMzI5NSwiZXhwIjoxNzEzMDQ0MDk1fQ.XUyp6UfXD6eizo5fqG7UWQ3IsIytCzgvBDUaqY1O39Y"


function Users() {

    const [users, setUsers] = useState([]);
    const [editorOpen, setEditorOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState();

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${URL}/list`, { headers: { 'x-token': token } });
            setUsers(data);
        } catch (error) {
            console.error("Error getting users:", error);
        }
    }

    const handleBan = async (id) => {
        try {
            await axios.put(`${URL}/delete/${id}`, { headers: { 'x-token': token } });
            fetchData();
        } catch (error) {
            console.error("Error banning user:", error);
        }
    }
    const handleAdmin = async (id) => {
        try {
            await axios.put(`${URL}/admin/${id}`, { headers: { 'x-token': token } });
            fetchData();
        } catch (error) {
            console.error("Error changing user permisions:", error);
        }
    }
    const handleOpenForm = (user) => {
        setEditorOpen(true);
        setSelectedUser(user);
    }
    const handleCloseForm = () => {
        setEditorOpen(false);
    }

    useEffect(() => { fetchData() }, []);

    return <div>

        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <div className="container">


                    {/* <a href="nuevo.html" className="btn btn-success">Agregar</a> */}

                    <table className="table table-hover table-bordered my-3" aria-describedby="titulo">
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
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.mail}</td>
                                    <td>
                                        <button onClick={() => handleBan(user.id)} className={user.status ? "btn btn-danger btn-sm me-2" : "btn btn-success btn-sm me-2"}>
                                            {user.status ? "Desbanear" : "Banear"}
                                        </button>
                                        <button onClick={() => handleAdmin(user.id)} className={user.isAdmin ? "btn btn-warning btn-sm me-2" : "btn btn-primary btn-sm me-2"}>
                                            {user.isAdmin ? "Quitar admin" : "Dar admin"}
                                        </button>
                                        <button onClick={() => handleOpenForm(user)} className="btn btn-info btn-sm me-2">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {editorOpen && (
                        <div>
                            {/* <button onClick={handleCloseForm}>X</button> */}
                            <button onClick={handleCloseForm} className="btn btn-danger">X</button>
                            <EditUser user={selectedUser} token={token} URL={URL} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    </div>
}


export default Users;

