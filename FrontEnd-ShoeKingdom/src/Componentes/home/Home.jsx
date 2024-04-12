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
          <div className="carousel-item fondo-slide1 fondo2">
            <div className="container ">
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
        <button className="carousel-control-prev1" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div>
      </div>


      
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="fw-bold mb-4 h2">Ofertas del mes</h1>
            
            <p>
              ¡No te pierdas esta oportunidad de renovar tu calzado con estilo
              y calidad a un precio inigualable!
            </p>
          </div>
        </div>
        <div className="row h-100 text-center py-3">

          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div className="card h-100 p-3 mx-auto">
              <a href="#"><img src="./assets/img/show00004.png" className="rounded-circle img-fluid border" /></a>
              <h5 className="text-center mt-3 mb-3">Zapatillas de Gym</h5>
           
              <p className="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
          
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div className="card h-100 p-3">
              <a href="#"><img src="./assets/img/show00008.png" className="rounded-circle img-fluid border" /></a>
              <h5 className="text-center mt-3 mb-3">Zapatillas para correr</h5>
              <p className="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
       
            </div>
          </div>
          <div className='class="col-12 col-md-4 p-2 mt-2'>
            <div className="card h-100 p-3">
              <a href="#"><img src="./assets/img/show00009.png" className="rounded-circle img-fluid border" /></a>
              <h5 className="text-center mt-3 mb-3">Zapatillas para senderismo</h5>
              <p className="text-center"><NavLink className=" btn btn-outline-primary " to="/product">Ver tienda</NavLink></p>
        
            </div>
          </div>

        </div>
      </section>


      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="fw-bold mb-4 h2">Nuestras Marcas</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">

                <div className="col-1 align-self-center">
                  <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">

                    <div className="carousel-inner product-links-wap" role="listbox">


                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>



                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
                <div className="col-1 align-self-center">
                  <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="colorsec">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="fw-bold mb-4 h2">Productos destacados</h1>
            
              <p>
                 Zapatillas con altas puntuaciones de clientes: duraderas, cómodas,
                  rendimiento superior para actividades deportivas y diarias.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00002.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$240.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 text-decoration-none text-dark">Zapatilla de Gym</a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00006.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$480.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 text-decoration-none text-dark">Zapatilla para correr</a>
                  <p className="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p className="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img src="./assets/products/show00007.png" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$360.00</li>
                  </ul>
                  <a href="shop-single.html" className="h2 text-decoration-none text-dark">Zapatilla de caminar</a>
                  <p className="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
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