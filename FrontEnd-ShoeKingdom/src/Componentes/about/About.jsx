import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Acerca de Nosotros</h1>
                        <p className="lead mb-4">
                            ShoeKingdom es una Zapatería especializada en zapatillas de alta calidad 
                            y estilo variado. Ofrecemos una amplia gama de marcas reconocidas
                             y diseños exclusivos para satisfacer todos los gustos y necesidades. 
                             Nuestro compromiso es brindar comodidad, durabilidad y moda en cada paso que des. ¡Encuentra tu par perfecto hoy mismo!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contactanos</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.jpg" alt="About Us" height="400px" width="600px" />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default About