import React from 'react'

const Footer =() => {
    return(
        <div>

    <footer className="footer" id="tempaltemo_footer">
    <nav className="navbar navbar-expand-lg bg-gradient navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container-fluid text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none fs-6" href="mailto:info@company.com">ShoeKingdom@company.com</a>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none fs-6" href="tel:010-020-0340">+54 911 32234567</a>
                        </div>
                        <div>
                            <a className="text-light mx-2" href="https://www.facebook.com/" target="_blank" rel="sponsored"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a className="text-light mx-2" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

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