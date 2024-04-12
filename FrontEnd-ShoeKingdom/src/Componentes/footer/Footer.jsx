import React from 'react'

const Footer = () => {
    return (
        <div>

            {/* <footer className="footer" id="tempaltemo_footer">
        <nav className="navbar" id="templatemo_nav_top">
                <div className="container-fluid text-light">
                    <div className=" row w-100 d-flex justify-content-between">
                        <div className='col-12 col-lg-8  '>
                            <i className="fa fa-envelope mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">ShoeKingdom@company.com</a>
                           
                        </div>
                         
                        <div className='col-12 col-lg-8  '>
                            <i className="fa fa-phone mx-2"></i>
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">+54 911 32234567</a>
                        </div>


                        <div className='col-12 col-lg-4 d-flex justify-content-center'>
                            <a className="text-light mx-2" href="https://www.facebook.com/" target="_blank" rel="sponsored"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a className="text-light mx-2" href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </nav>



        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12 d-flex justify-content-center">
                        <p className="text-left text-light">
                            Copyright &copy; 2024 Proyecto final Henry
                            | Elaborado por by <a rel="sponsored" href="#" target="_blank">Enzo, Cristian, Anadeska, julieta, Carlos, Nicolas, Raul y Mateo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer> */}

            <footer class="footer">
                <div class="containe">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <h2 class="footer-heading py-2"><a href="#" class="logo1 text-light">ShoeKingdom</a></h2>

                            <ul class="ftco-footer-social p-0">
                            <a className="text-light mx-2" href="https://www.facebook.com/" target="_blank" rel="sponsored"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                            <a className="text-light mx-2" href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center bg-black text-light">
                            <p class="copyright">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved<i class="ion-ios-heart" aria-hidden="true"></i> by <a href="#" target="_blank">ShoeKingdom.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer