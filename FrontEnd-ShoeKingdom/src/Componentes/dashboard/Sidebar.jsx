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
            {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg> */}
            <span className="fs-4">ShoeKingdom</span>
          </a>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink className=" nav-link p-2" to="/admin">
                {" "}
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink className=" nav-link  p-2" to="/admin/users">
                {" "}
                <i className="fa fa-users" aria-hidden="true"></i> Usuarios
              </NavLink>
            </li>
            <li>
              <a href="#" className="nav-link link-body-emphasis p-2">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Orden de compras
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-body-emphasis p-2">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Ventas
              </a>
            </li>
            <li>
              <li className="nav-item">
                <NavLink className=" nav-link  p-2" to="/admin/products">
                  {" "}
                  <i className="fa fa-users" aria-hidden="true"></i> Productos
                </NavLink>
              </li>
            </li>
            <li>
              <a href="#" className="nav-link link-body-emphasis p-2">
                <i className="fa fa-comments-o" aria-hidden="true"></i>
                Comentarios
              </a>
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
