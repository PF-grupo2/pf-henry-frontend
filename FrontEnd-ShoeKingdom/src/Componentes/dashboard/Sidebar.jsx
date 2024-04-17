import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="Sidebar">
      <main className="d-flex flex-nowrap">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            
            <span className="logo1">ShoeKingdom</span>
          </a>

          <ul className="nav  flex-column mb-auto">

            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" exact to="/admin">
                <i className="fa fa-home"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/admin/users">
                <i className="fa fa-users"></i> Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/admin/products">
                <i className="fa fa-cubes"></i> Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/admin/sales">
                <i className="fa fa-shopping-cart"></i> Ventas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/admin/reviews">
                <i className="fa fa-comments"></i> Reseñas
              </NavLink>
            </li>
          </ul>


          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../public/assets/img/usuario-01.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Carlos</strong>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="b-example-divider b-example-vr"></div>
      </main>
    </div>
  );
}

export default Sidebar;
