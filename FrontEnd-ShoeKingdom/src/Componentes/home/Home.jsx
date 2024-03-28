import React from 'react'
//import imagen from '/assets/foto7.jpg';
// import imagen1 from '/assets/foto2.jpg';
import imagen2 from '/assets/foto3.jpg';
import Product from '../product/Product';
import { NavLink } from 'react-router-dom';
import DATA from '../../Data';

const Home = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active fondo-slide1">
            <div className="container ">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src="./assets/img/slide1.png" alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-left">
                  <div>
                    <h1 className="titulo text-primary"><b> ShoeKingdom </b></h1>
                    {/* <h3 className="h2">Encuentra las mejores zapatillas</h3> */}
                    <hr />
                    <p>
                      Tenemos una amplia y variedad de marcas y estilos de zapatillas
                      para todas las ocasiones. Ya sea que busques zapatillas deportivas,
                      casuales o elegantes, tenemos lo que necesitas.
                    </p>
                    <NavLink className=" btn btn-primary px-3 py-2 " to="/product">Ver tienda</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  fondo">
            <div className="container">
              <div className="row px-2">
                <div className="mx-auto col-md-8 col-lg-6 ">
                </div>
                <div className="col-lg-5 mb-0 d-flex align-items-center px-5 order-lg-last">
                  <div>
                    <h1 className="titulo2"><b>Sale</b></h1>
                    <p className='subtitulo'><b>50% OF</b></p>
                    <p className="parrafo">
                       HASTA  AGOTAR  STOCK
                    </p>
                    <br/>
                    <NavLink className=" btn btn-primary px-3 py-2 d-block mx-auto " to="/product">Ver tienda</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container ">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src="./assets/img/slide3.jpg" alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 className="titulo text-primary"><b>Montaña</b></h1>
                    <h3 class="h2">Encuentra las mejores zapatillas</h3>
                    <p>
                      Y una amplia variedad de marcas y estilos de zapatillas
                      para todas las ocasiones. Ya sea que busques zapatillas deportivas,
                      casuales o elegantes, tenemos lo que necesitas.
                    </p>
                    <NavLink className=" btn btn-primary px-3 py-2 " to="/product">Ver tienda</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev1" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
      </div>

      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1 text-primary">Ofertas del mes</h1>
            <hr />
            <p>
            ¡ShoeKingdom esta precios irresistibles este mes! Descubre una amplia
               gama de estilos y colores en nuestra oferta especial. Desde deportivas hasta 
               casuales, encuentra el par perfecto para cualquier ocasión. 
               ¡No te pierdas esta oportunidad de renovar tu calzado con estilo
                y calidad a un precio inigualable!
            </p>
          </div>
        </div>
        <div class="row h-100">

          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3">
              <a href="#"><img src="./assets/img/show00004.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas de Gym</h5>
              {/* <p class="text-center"><a class="btn btn-primary">Ver tienda</a></p> */}
              <NavLink className=" btn btn-primary px-3 py-2 " to="/product">Ver tienda</NavLink>
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3">
              <a href="#"><img src="./assets/products/show00005.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas para correr</h5>
              {/* <p class="text-center"><a class="btn btn-primary">Ver tienda</a></p> */}
              <NavLink className=" btn btn-primary px-3 py-2 " to="/product">Ver tienda</NavLink>
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3">
              <a href="#"><img src="./assets/products/show00001.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas para senderismo</h5>
              <NavLink className=" btn btn-primary px-3 py-2 " to="/product">Ver tienda</NavLink>
            </div>
          </div>

        </div>
      </section>
      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1 text-primary">Productos destacados</h1>
              <hr />
              <p>
                Comodidad, estilo y durabilidad se fusionan en cada par. Desde tendencias urbanas hasta
                rendimiento deportivo, encuentra el calzado perfecto que se adapta a tu estilo de vida.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00002.png" class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="shop-single.html" class="h2 text-decoration-none text-dark">Zapatilla de Gym</a>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                  </p>
                  <p class="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00006.png" class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="shop-single.html" class="h2 text-decoration-none text-dark">Zapatilla para correr</a>
                  <p class="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p class="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00007.png" class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="shop-single.html" class="h2 text-decoration-none text-dark">Zapatilla de caminar</a>
                  <p class="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p class="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home