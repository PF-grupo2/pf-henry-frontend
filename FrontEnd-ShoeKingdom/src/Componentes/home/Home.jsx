import React from 'react'
import imagen2 from '/assets/foto3.jpg';
import Product from '../product/Product';
import { NavLink } from 'react-router-dom';
import DATA from '../../Data';


const Home = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active  fondo1 fondo-slide1">
            <div className="container-fluid  ">
              <div className="row ">
                 <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  {/* <img className="img-fluid" src="./assets/img/slide1.png" alt="" /> */}
                </div>
                 <div className="col-lg-12 d-flex  justify-content-center  justify-content-center align-items-center">
                  <div>
                    {/* <h1 className="titulo text-primary"><b> ShoeKingdom </b></h1>
                    <hr />
                    <p>
                      Tenemos una amplia y variedad de marcas y estilos de zapatillas
                      para todas las ocasiones. Ya sea que busques zapatillas deportivas,
                      casuales o elegantes, tenemos lo que necesitas.
                    </p>  */}
                     {/* <NavLink className=" btn btn-primary" to="/product">Ver tienda</NavLink> */}
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="carousel-item  fondo fondo-slide1">
            <div className="container">
              <div className="row px-2">
                {/* <div className="mx-auto col-md-8 col-lg-6 ">
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
                </div> */}
              </div>
            </div>
          </div>
          <div class="carousel-item fondo-slide1 fondo2">
            <div class="container ">
              {/* <div class="row p-5">
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
              </div> */}
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
            <h1 className="fw-bold mb-4 h2">Ofertas del mes</h1>
            
            <p>
              ¡No te pierdas esta oportunidad de renovar tu calzado con estilo
              y calidad a un precio inigualable!
            </p>
          </div>
        </div>
        <div class="row h-100 text-center py-3">

          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3 mx-auto">
              <a href="#"><img src="./assets/img/show00004.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas de Gym</h5>
           
              <p class="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
          
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3">
              <a href="#"><img src="./assets/img/show00008.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas para correr</h5>
              <p class="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
       
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div class="card h-100 p-3">
              <a href="#"><img src="./assets/img/show00009.png" class="rounded-circle img-fluid border" /></a>
              <h5 class="text-center mt-3 mb-3">Zapatillas para senderismo</h5>
              <p class="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
        
            </div>
          </div>

        </div>
      </section>


      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="fw-bold mb-4 h2">Nuestras Marcas</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">

                <div class="col-1 align-self-center">
                  <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="col">
                  <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">

                    <div class="carousel-inner product-links-wap" role="listbox">


                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>



                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
                <div class="col-1 align-self-center">
                  <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="colorsec">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="fw-bold mb-4 h2">Productos destacados</h1>
            
              <p>
                 Zapatillas con altas puntuaciones de clientes: duraderas, cómodas,
                  rendimiento superior para actividades deportivas y diarias.
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