import DATA from '../../Data'
import Card from '../card/Card'
import Cards from '../cards/Cards'
import '/public/assets/js/ecommerce.js';
import '/public/assets/css/ecommerce.css'
import Filter from '../filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { getZapatilla, getFiltersArray } from '../../../Redux/Actions/actions';
import { getProductByName } from '../../../Redux/Actions/actions';



const Product = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const zapatilla = useSelector((state) => state.zapatilla);
    const allZapatillas = useSelector((state) => state.allZapatilla);

    const [page, setPage] = useState(1)

    const brands = useRef()
    const sizes = useRef()
    const genders = useRef()
    const styles = useRef()
    const colors = useRef()

    //console.log("lo que llega de reducer al product", filter)
    console.log("zapatilla", zapatilla)
    console.log("lo que llega de reducer al product", allZapatillas)

    useEffect(() => {
        dispatch(getZapatilla());
    }, []);
    useEffect(() => {
        handleFilter();
    }, [dispatch, page, zapatilla]);



    const handleFilter = () => {
        const selectedBrands = Array.from(brands.current.selectedOptions, option => option.value)
        const formatBrands = selectedBrands.join("&")

        const selectedSizes = Array.from(sizes.current.selectedOptions, option => option.value)
        const formatSizes = selectedSizes.join("&")

        const selectedGenders = Array.from(genders.current.selectedOptions, option => option.value)
        const formatGenders = selectedGenders.join("&")

        const selectedStyles = Array.from(styles.current.selectedOptions, option => option.value)
        const formatStyles = selectedStyles.join("&")

        const selectedColors = Array.from(colors.current.selectedOptions, option => option.value)
        const formatColors = selectedColors.join("&")

        let formatFilters

        formatFilters = formatBrands + "&" + formatSizes + "&" + formatGenders + "&" + formatStyles + "&" + formatColors
        if (zapatilla.length > 0) formatFilters += `&search=${zapatilla}`

        dispatch(getZapatilla(formatFilters, page));
    }

    const resetFilters = () => {
        brands.current.selectedIndex = 0;
        sizes.current.selectedIndex = 0;
        genders.current.selectedIndex = 0;
        colors.current.selectedIndex = 0;
        styles.current.selectedIndex = 0;
        setPage(1);
        dispatch(getProductByName(""))
        handleFilter();
    }


    useEffect(() => {
        if (allZapatillas.length === 0) resetFilters();
    }, [allZapatillas.products]);


    const handlePageChangeNext = () => {
        setPage(page + 1);
        // handleFilter();
    }
    const handlePageChangeBack = () => {
        setPage(page - 1);
        // handleFilter();
    }

    return (
        <div>
            <div className="container-fluid">
                <div class="row  justify-content-center align-items-center">

                    {/* <div class="col-lg-3 izquierda py-5 px-5">
                        <h2 class="h3 pb-4">Categorias</h2>
                        <Filter/>
                        </div> */}


                    <div class="col-lg-12 filtros">
                        <div className='row ' >
                            <div className='col-lg-3 custom-select'>
                                <label className='custom-label'>
                                    Marca
                                </label>
                                <select
                                    onChange={handleFilter}
                                    ref={brands}
                                //  multiple
                                >
                                    <optgroup>
                                        <option value="" selected>All</option>
                                        <option value="brand[]=Nike">Nike</option>
                                        <option value="brand[]=Puma">Puma</option>
                                        <option value="brand[]=Adidas">Adidas</option>
                                        <option value="brand[]=Reebok">Reebok</option>
                                        <option value="brand[]=Asics">Asics</option>
                                        <option value="brand[]=Merrell">Merrell</option>
                                        <option value="brand[]=New Balance">New balance</option>
                                        <option value="brand[]=Under Armour">Under Armour</option>
                                        <option value="brand[]=Mizuno">Mizuno</option>
                                        <option value="brand[]=Brooks">Brooks</option>
                                        <option value="brand[]=Skechers">Skechers</option>
                                        <option value="brand[]=Columbia">Columbia</option>
                                        <option value="brand[]=Hoka One One">Hoka One One</option>
                                        <option value="brand[]=Keen">Keen</option>
                                        <option value="brand[]=Under Armour">Under Armour</option>
                                    </optgroup>
                                </select>

                            </div>

                            <div className='col-lg-2  custom-select '>
                                <label className='custom-label'>
                                    Talla
                                </label>

                                <select
                                    onChange={handleFilter}
                                    ref={sizes}
                                // multiple
                                >
                                    <optgroup>
                                        <option value="" selected>All</option>
                                        <option value="size[]=37">37</option>
                                        <option value="size[]=38">38</option>
                                        <option value="size[]=39">39</option>
                                        <option value="size[]=40">40</option>
                                        <option value="size[]=41">41</option>
                                        <option value="size[]=42">42</option>
                                        <option value="size[]=43">43</option>
                                        <option value="size[]=44">44</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className='col-lg-2  custom-select'>

                                <label className='custom-label'>
                                    Genero
                                </label>
                                <select
                                    onChange={handleFilter}
                                    ref={genders}
                                // multiple
                                >
                                    <optgroup>
                                        <option value="" selected>All</option>
                                        <option value="gender[]=Hombre">Masculino</option>
                                        <option value="gender[]=Mujer">Femenino</option>
                                        <option value="gender[]=Unisex">Unisex</option>
                                    </optgroup>
                                </select>
                            </div>


                            <div className='col-lg-2  custom-select'>
                                <label className='custom-label'>
                                    Estilo
                                </label>
                                <select
                                    onChange={handleFilter}
                                    ref={styles}
                                // multiple
                                >
                                    <optgroup>
                                        <option value="" selected>All</option>
                                        <option value="style[]=Outdoor">outdoor</option>
                                        <option value="style[]=Tenis">tenis</option>
                                        <option value="style[]=Basquet">Basquet</option>
                                        <option value="style[]=Futbol">Futbol</option>
                                        <option value="style[]=Hockey">Hockey</option>
                                        <option value="style[]=Motosport">Motosport</option>
                                        <option value="style[]=Natacion">Natacion</option>
                                        <option value="style[]=Running">Running</option>
                                        <option value="style[]=Tenis">Tenis</option>
                                        <option value="style[]=Training">Training</option>
                                    </optgroup>
                                </select>

                            </div>

                            <div className='col-lg-2  custom-select'>
                                <label className='custom-label'>
                                    Color
                                </label>
                                <select
                                    onChange={handleFilter}
                                    ref={colors}
                                // multiple
                                >
                                    <optgroup>
                                        <option value="" selected>All</option>
                                        <option value="color[]=Blanco">Blanco</option>
                                        <option value="color[]=Negro">Negro</option>
                                        <option value="color[]=Azul">Azul</option>
                                        <option value="color[]=Amarillo">Amarillo</option>
                                        <option value="color[]=Gris">Gris</option>
                                        <option value="color[]=Verde">Verde</option>
                                        <option value="color[]=Rojo">Rojo</option>
                                        <option value="color[]=Rosado">Rosado</option>
                                        <option value="color[]=Violeta">Violeta</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className='col-lg-1 custom-select'>
                                <button onClick={resetFilters}>
                                    Reset
                                </button>
                            </div>


                        </div>



                    </div>

                    <div class="col-lg-12 justify-content-center align-items-center">

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-inline shop-top-menu pb-3 pt-1">

                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-around">
                            < Cards allZapatillas={allZapatillas.products} />
                        </div>

                    </div>
                    <div className='pagination justify-content-center align-items-center py-3'>
                        <button onClick={handlePageChangeBack} disabled={page === 1 || allZapatillas.totalPages === 1}>
                            back
                        </button>

                        <span>
                            Page: {allZapatillas.currentPage} of {allZapatillas.totalPages}
                        </span>

                        <button onClick={handlePageChangeNext} disabled={allZapatillas.currentPage === allZapatillas.totalPages || allZapatillas.totalPages === 1} >
                            next
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product