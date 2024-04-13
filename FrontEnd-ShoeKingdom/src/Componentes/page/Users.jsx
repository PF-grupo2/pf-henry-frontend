import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PORT = 3000;
const URL = `http://localhost:${PORT}/api/v1/users`;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZjQzMGYzLTc3NzgtNGZiZC05MGNhLTJmMDIyY2JkMjgwZCIsImlhdCI6MTcxMzAzMzI5NSwiZXhwIjoxNzEzMDQ0MDk1fQ.XUyp6UfXD6eizo5fqG7UWQ3IsIytCzgvBDUaqY1O39Y"


function Users() {

    const [users, setUsers] = useState([]);

    const fetchData = async()=> {
        try{
            const { data } = await axios.get(`${URL}/list`, {headers: {'x-token': token}});
            setUsers(data);
        } catch(error){
            console.error("Error getting users:", error);
        }
    }

    const handleBan = async(id)=>{
        try{
            await axios.put(`${URL}/delete/${id}`, {headers: { 'x-token': token }});
            fetchData();
        }catch(error){
            console.error("Error banning user:", error);
        }
    }
    const handleAdmin = async(id)=>{
        try{
            await axios.put(`${URL}/admin/${id}`, {headers: { 'x-token': token }});
            fetchData();
        }catch(error){
            console.error("Error changing user permisions:", error);
        }
    }

    useEffect(()=>{fetchData()}, [])

    return <div>
            {users.map(user => <div key={user.id}>
                <span>Nombre: {user.name}</span>
                <span>Mail: {user.mail}</span>
                <span>Numero: {user.phone}</span>
                <span>ID: {user.id}</span>
                <button onClick={()=> handleBan(user.id)}>{user.status===true?"banear":"desbanear"}</button>
                <button onClick={()=> handleAdmin(user.id)}>{user.isAdmin===true?"quitar admin":"dar admin"}</button>
                </div>)}
        </div>
  }

  
  export default Users;