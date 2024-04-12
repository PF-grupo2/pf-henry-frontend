import { NavLink } from 'react-router-dom'
import './About.css'
const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row p-5 about">
                    <div className="col-12 col-md-6">
                        <h1 className=" fw-bold mb-4 h2">Acerca de Nosotros</h1>
                        <p className="lead mb-4">
                            ShoeKingdom es una Zapatería especializada en zapatillas de alta calidad
                            y estilo variado. Ofrecemos una amplia gama de marcas reconocidas
                            y diseños exclusivos para satisfacer todos los gustos y necesidades.
                            Nuestro compromiso es brindar comodidad, durabilidad y moda en cada paso que des. ¡Encuentra tu par perfecto hoy mismo!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contactanos</NavLink>
                    </div>
                    <div className=" col-12 col-md-6 d-flex justify-content-center">
                        <img className="about-img"  src="/assets/about.jpg" alt="About Us"  />
                    </div>
                </div>

                <section className=" py-5" id="proyectos">
                    <h1 className="text-center fw-bold mb-4 h2">Equipo Developer</h1>
                    <div className="container">
                        <div className="row g-5 mb-1  justify-content-center align-items-center align-items-center wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-12  justify-content-center">
                                <p className="mb-5 parrafo  text-black text-center justify-content-center">El equipo que union conocimiento y tiempo para realizar este proyecto
                                 tan enriquecedor para todos nosotros</p>
                            </div>
                        </div>
                        <div className="row g-2 justify-content-center align-items-center portfolio-container wow fadeInUp align-items-center text-center" data-wow-delay="0.1s">
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>  
                             <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img className="img-fluid rounded-circle" src="/assets/perfil.png" alt="" />
                                    <div className="portfolio-btn align-items-center">
                                        <a className="btn btn-lg-square btn-outline-primary"  href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                  
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )


}

export default About