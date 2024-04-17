import axios from "axios";
import { useState, useEffect } from "react";
import EditUser from "./editUserForm";
import { utilsStorage } from '../utils';

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1/users`;

function Users() {

    const token = utilsStorage.getDataStorage("token");
    const { isAdmin } = utilsStorage.getDataStorage("userSession");

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

    const handleBan = async (user) => {
        try {
            await axios.put(`${URL}/delete/${user.id}`, { headers: { 'x-token': token } });
            if(user.status===true&&user.isAdmin===true) handleAdmin(user);
            fetchData();
        } catch (error) {
            console.error("Error banning user:", error);
        }
    }
    const handleAdmin = async (user) => {
        try {
            await axios.put(`${URL}/admin/${user.id}`, { headers: { 'x-token': token } });
            if(user.status===false&&user.isAdmin===false) handleBan(user);
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

    if(!isAdmin) return <span>No tiene permisos para entrar aquí</span>

    return <div>

        <div>
            <main>
                <div className="container">


                    {/* <a href="nuevo.html" className="btn btn-success">Agregar</a> */}
                    {/* <span>el token es: {token}</span>
                    <button onClick={()=>utilsStorage.removeDataStorage("token")}>borrar token</button> */}
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
                                    { user.mail !== "master@gmail.com" &&(<td>
                                        <button onClick={() => handleBan(user)} className={!user.status ? "btn btn-danger btn-sm me-2" : "btn btn-success btn-sm me-2"}>
                                            {!user.status ? "Desbanear" : "Banear"}
                                        </button>
                                        <button onClick={() => handleAdmin(user)} className={user.isAdmin ? "btn btn-warning btn-sm me-2" : "btn btn-primary btn-sm me-2"}>
                                            {user.isAdmin ? "Quitar admin" : "Dar admin"}
                                        </button>
                                        <button onClick={() => handleOpenForm(user)} className="btn btn-info btn-sm me-2">Editar</button>
                                    </td>)}
                                    {user.mail === "master@gmail.com" && (<td></td>)}
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

