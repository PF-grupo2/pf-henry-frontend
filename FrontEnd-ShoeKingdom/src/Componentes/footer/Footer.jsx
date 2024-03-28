import React from 'react'

const Footer =() => {
    return(
        <div>

    <footer className="footer" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">ShoeKingdom</h2>
                    <ul className="list-unstyled text-dark footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw text-dark "></i>
                            Comodidad, estilo y durabilidad se fusionan en cada par
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none text-dark" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none text-dark" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                    <div>
                            <a className="text-dark mx-2" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a className="text-dark mx-2" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none text-dark" href="#">Luxury</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Sport Wear</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Men's Shoes</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Women's Shoes</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Popular Dress</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Gym Accessories</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Sport Shoes</a></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Menu</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><a className="text-decoration-none text-dark" href="#">Home</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">About Us</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Shop Locations</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">FAQs</a></li>
                        <li><a className="text-decoration-none text-dark" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2024 Proyecto final Henry
                            | Elaborado por by <a rel="sponsored" href="#" target="_blank">Enzo, Cristian, Anadeska, julieta, Carlos, Nicolas, Raul y Mateo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    
        </div>
    )
}

export default Footer