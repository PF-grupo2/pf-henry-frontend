import { useDispatch } from "react-redux"; // Importa useDispatch para disparar acciones de Redux
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setToken } from "../../../Redux/Actions/actions"; // Importa la acción setToken
import { utilsStorage } from "../utils";
import { useState } from "react";
import { BASE_URL } from "../../config";
import './Login.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const dispatch = useDispatch(); // Obtiene la función dispatch
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const { user, token } = data;

        // Guardar el token en localStorage

        utilsStorage.saveDataStorage("token", token);

        console.log("Token almacenado en localStorage:", token);

        // Guardar el token en el estado global de Redux
        dispatch(setToken(token));

        console.log("Token almacenado en estado global de Redux:", token);

        const loggedInUser = {
          id: user.id,
          name: user.name,
          email: user.mail,
          phone: user.phone,
          isAdmin: user.isAdmin,
        };
        console.log("esto es lo que llega al log", loggedInUser);

        utilsStorage.saveDataStorage("userSession", loggedInUser);

        navigate("/");

        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "¡Bienvenido de vuelta!",
        });
      } else {
        const errorMessage = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error al iniciar sesión",
          text:
            errorMessage.message || "Por favor, inténtelo de nuevo más tarde.",
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
      Swal.fire({
        icon: "error",
        title: "Error de red",
        text: "Ocurrió un error de red. Por favor, inténtelo de nuevo más tarde.",
      });
    }
  };

  return (


    // <form onSubmit={handleSubmit}>
    //   <h2>Iniciar Sesión</h2>
    //   <label htmlFor="loginMail">Correo electrónico:</label>
    //   <br />
    //   <input
    //     type="email"
    //     id="loginMail"
    //     name="mail"
    //     value={formData.mail}
    //     onChange={handleChange}
    //     required
    //   />
    //   <br />
    //   <label htmlFor="loginPassword">Contraseña:</label>
    //   <br />
    //   <input
    //     type="password"
    //     id="loginPassword"
    //     name="password"
    //     value={formData.password}
    //     onChange={handleChange}
    //     required
    //   />
    //   <br />
    //   <br />
    //   <button type="submit">Iniciar Sesión</button>
    // </form>

     <div className="container-login">
      <div className="row login p-3">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <form className="form-login" onSubmit={handleSubmit}>
            <h2 className="mb-4">Iniciar Sesión</h2>
            <div className="form-group mb-3">
              <label htmlFor="loginMail" className="mb-1">Correo electrónico:</label>
              <input
                type="email"
                id="loginMail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="loginPassword" className="mb-1">Contraseña:</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-dark btn-lg btn-block" type="submit">Iniciar Sesión</button>
          </form>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img className="login-img" src="/assets/login.png" alt="Contact Us" />
        </div>
      </div>
    </div>



  );
}

export default LoginForm;
