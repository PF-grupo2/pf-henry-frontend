import { useDispatch, useSelector } from "react-redux";
import DATA from '../../Data';


import {
    getfilter
  } from "../../../Redux/Actions/categories";


function Filter() {
    const dispatch = useDispatch();

    const handlerFilterGenero = (value) => {
        console.log("Que seleciona", value)
         dispatch(getfilter(value));
      };

    return (
        <>
            <ul className="list-unstyled templatemo-accordion1">
                <li className="pb-3">
                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Genero
                        <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                    </a>
                        <ul className="collapse show list-unstyled pl-3">
                            <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Todos")}>Todos</a></li>
                            <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Hombre")}>Hombre</a></li>
                            <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Mujer")}>Mujer</a></li>
                            <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Otros")}>Unixes</a></li>
                        </ul>
                </li>
                <li className="pb-3">
                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Estilo
                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                    </a>
                    {/* <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                        <li><a className="text-decoration-none" href="#">Basquet</a></li>
                        <li><a className="text-decoration-none" href="#">Futbol</a></li>
                        <li><a className="text-decoration-none" href="#">Hockey</a></li>
                        <li><a className="text-decoration-none" href="#">Motorsport</a></li>
                        <li><a className="text-decoration-none" href="#">Natacion</a></li>
                        <li><a className="text-decoration-none" href="#">Outdoor</a></li>
                        <li><a className="text-decoration-none" href="#">Running</a></li>
                        <li><a className="text-decoration-none" href="#">Tenis</a></li>
                        <li><a className="text-decoration-none" href="#">Training</a></li>
                    </ul> */}

                    <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                        <li>
                            <input type="checkbox" id="basquet" />
                            <label for="basquet" class="text-decoration-none">Basquet</label>
                        </li>
                        <li>
                            <input type="checkbox" id="futbol" />
                            <label for="futbol" class="text-decoration-none">Futbol</label>
                        </li>
                        <li>
                            <input type="checkbox" id="hockey" />
                            <label for="hockey" class="text-decoration-none">Hockey</label>
                        </li>
                        <li>
                            <input type="checkbox" id="motorsport" />
                            <label for="motorsport" class="text-decoration-none">Motorsport</label>
                        </li>
                        <li>
                            <input type="checkbox" id="natacion" />
                            <label for="natacion" class="text-decoration-none">Natacion</label>
                        </li>
                        <li>
                            <input type="checkbox" id="outdoor" />
                            <label for="outdoor" class="text-decoration-none">Outdoor</label>
                        </li>
                        <li>
                            <input type="checkbox" id="running" />
                            <label for="running" class="text-decoration-none">Running</label>
                        </li>
                        <li>
                            <input type="checkbox" id="tenis" />
                            <label for="tenis" class="text-decoration-none">Tenis</label>
                        </li>
                        <li>
                            <input type="checkbox" id="training" />
                            <label for="training" class="text-decoration-none">Training</label>
                        </li>
                    </ul>
                </li>
                <li className="pb-3">
                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Marca
                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                    </a>
                    <ul className="collapse show list-unstyled pl-3">
                        {/* <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("todas")}>Todas</a></li> */}
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Nike")}>Nike</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Adidas")}>Adidas</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Puma")}>Puma</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Reebok")}>Reebok</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Asics")}>Asics</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Merrell")}>Merrell</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("New balance")}>New balance</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Under Armour")}>Under Armour</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Mizuno")}>Mizuno</a></li>                    
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Brooks")}>Brooks</a></li>
                        <li><a className="text-decoration-none" href="#" onClick={() => handlerFilterGenero("Timberland")}>Timberland</a></li>
                     </ul>    
                </li>
                <li className="pb-3">
                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Talla
                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                    </a>
                    {/* <ul id="collapseFour" className="collapse list-unstyled pl-3">
                        <li><a className="text-decoration-none" href="#">40-41</a></li>
                        <li><a className="text-decoration-none" href="#">41-42</a></li>
                        <li><a className="text-decoration-none" href="#">42-43</a></li>
                        <li><a className="text-decoration-none" href="#">43-44</a></li>
                        <li><a className="text-decoration-none" href="#">44-45</a></li>
                    </ul> */}
                    <ul id="collapseFour" className="collapse list-unstyled pl-3">

                    <li>
                            <input type="checkbox" id="size-40-41" />
                            <label for="size-40-41" class="text-decoration-none">37-38</label>
                        </li>

                        <li>
                            <input type="checkbox" id="size-40-41" />
                            <label for="size-40-41" class="text-decoration-none">38-39</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-40-41" />
                            <label for="size-40-41" class="text-decoration-none">39-40</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-40-41" />
                            <label for="size-40-41" class="text-decoration-none">40-41</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-41-42" />
                            <label for="size-41-42" class="text-decoration-none">41-42</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-42-43" />
                            <label for="size-42-43" class="text-decoration-none">42-43</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-43-44" />
                            <label for="size-43-44" class="text-decoration-none">43-44</label>
                        </li>
                        <li>
                            <input type="checkbox" id="size-44-45" />
                            <label for="size-44-45" class="text-decoration-none">44-45</label>
                        </li>
                    </ul>
                </li>
                <li className="pb-3">
                    <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Color
                        <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                    </a>
                    {/* <ul id="collapseSix" className="collapse list-unstyled pl-3">
                        <li><a className="text-decoration-none blanco" href="#"> <i className="fa fa-circle blanco" aria-hidden="true"></i> Blanco</a></li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle negro" aria-hidden="true"></i>   Negro</a></li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle azul" aria-hidden="true"></i>  </a>Azul</li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle amarillo" aria-hidden="true"></i> Amarillo</a></li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle gris" aria-hidden="true"></i> Gris</a></li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle verde" aria-hidden="true"></i> Verde</a></li>
                        <li><a className="text-decoration-none" href="#"><i className="fa fa-circle rojo" aria-hidden="true"></i> Rojo</a></li>
                        <li><a className="text-decoration-none" href="#"> <i className="fa fa-circle rosado" aria-hidden="true"></i> Rosado</a></li>
                    </ul> */}

                    <ul id="collapseSix" className="collapse list-unstyled pl-3">
                        <li>
                            <input type="checkbox" id="blanco" />
                            <label for="blanco" class="text-decoration-none blanco1"><i className="fa fa-circle blanco" aria-hidden="true"></i> Blanco</label>
                        </li>
                        <li>
                            <input type="checkbox" id="negro" />
                            <label for="negro" class="text-decoration-none"><i className="fa fa-circle negro" aria-hidden="true"></i> Negro</label>
                        </li>
                        <li>
                            <input type="checkbox" id="azul" />
                            <label for="azul" class="text-decoration-none"><i className="fa fa-circle azul" aria-hidden="true"></i> Azul</label>
                        </li>
                        <li>
                            <input type="checkbox" id="amarillo" />
                            <label for="amarillo" class="text-decoration-none"><i className="fa fa-circle amarillo" aria-hidden="true"></i> Amarillo</label>
                        </li>
                        <li>
                            <input type="checkbox" id="gris" />
                            <label for="gris" class="text-decoration-none"><i className="fa fa-circle gris" aria-hidden="true"></i> Gris</label>
                        </li>
                        <li>
                            <input type="checkbox" id="verde" />
                            <label for="verde" class="text-decoration-none"><i className="fa fa-circle verde" aria-hidden="true"></i> Verde</label>
                        </li>
                        <li>
                            <input type="checkbox" id="rojo" />
                            <label for="rojo" class="text-decoration-none"><i className="fa fa-circle rojo" aria-hidden="true"></i> Rojo</label>
                        </li>
                        <li>
                            <input type="checkbox" id="rosado" />
                            <label for="rosado" class="text-decoration-none"><i className="fa fa-circle rosado" aria-hidden="true"></i> Rosado</label>
                        </li>
                    </ul>



                </li>

            </ul>



        </>
    )
}

export default Filter;