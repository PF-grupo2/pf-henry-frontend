import DATA from '../../Data'
import cardItem from '../card/Card'


const Product = () =>{
    return (
        <div>
            <div className="container py-4">

                <div class="row">
                    <div class="col-lg-3">
                        <h1 class="h2 pb-4">Buscar por:</h1>
                        <ul class="list-unstyled templatemo-accordion">
                            <li class="pb-3">
                                <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Genero
                                    <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul class="collapse show list-unstyled pl-3">
                                    <li><a class="text-decoration-none" href="#">Hombre</a></li>
                                    <li><a class="text-decoration-none" href="#">Mujer</a></li>
                                    <li><a class="text-decoration-none" href="#">Niños</a></li>
                                    <li><a class="text-decoration-none" href="#">Niñas</a></li>
                                </ul>
                            </li>
                            <li class="pb-3">
                                <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Oferta
                                    <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseTwo" class="collapse list-unstyled pl-3">
                                    <li><a class="text-decoration-none" href="#">Precio</a></li>
                                    <li><a class="text-decoration-none" href="#">Mas vendido</a></li>
                                </ul>
                            </li>
                            <li class="pb-3">
                                <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Categorias
                                    <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                                </a>
                                <ul id="collapseThree" class="collapse list-unstyled pl-3">
                                    <li><a class="text-decoration-none" href="#">Senderimos</a></li>
                                    <li><a class="text-decoration-none" href="#">correr</a></li>
                                    <li><a class="text-decoration-none" href="#">caminar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-9">

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-inline shop-top-menu pb-3 pt-1">
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none mr-3" href="#">Todos</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none mr-3" href="#">Hombre</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none" href="#">Mujer</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 pb-4">
                                <div class="d-flex">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Buscar por nombre" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product