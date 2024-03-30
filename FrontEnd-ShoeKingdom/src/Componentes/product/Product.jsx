import DATA from '../../Data'
import Card from '../card/Card'
import Cards from '../cards/Cards'
import '/public/assets/js/ecommerce.js';
import '/public/assets/css/ecommerce.css'
import Filter from '../filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { getZapatilla, getFiltersArray } from '../../../Redux/Actions/actions';
// import * as actions from '../../../Redux/Actions/categories';
// const { getZapatilla } = actions;

import './Product.css'


const Product = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const zapatilla = useSelector((state) => state.zapatilla);
    const allZapatillas = useSelector((state) => state.allZapatilla);

    const brands = useRef()
    const sizes = useRef()
    const genders = useRef()
    const styles = useRef()
    const colors = useRef()

    // console.log("lo que llega de reducer al product", filter)
    // console.log("lo que llega de reducer al product", zapatilla)
    // console.log("lo que llega de reducer al product", allZapatillas)

    useEffect(() => {
        dispatch(getZapatilla());
    }, [dispatch]);

    const handleFilter = (e) => {
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

        const formatFilters = formatBrands + "&" + formatSizes + "&" + formatGenders + "&" + formatStyles + "&" + formatColors

        dispatch(getZapatilla(formatFilters))

//    const brands = useRef()
    const {filters2, setFilters2} = useState([])

    console.log("lo que llega de reducer al product", filter)
    console.log("lo que llega de reducer al product", zapatilla)
    console.log("lo que llega de reducer al product", allZapatillas)

    useEffect(() => {
        dispatch(getZapatilla());
      }, [dispatch]);
    
    const handleFilter = (e)=>{
        const value = e.target.value;
//        dispatch(getFiltersArray(value))
        dispatch(getZapatilla(value))

    }
    return (
        <div>
            <div className="container-fluid">
                <div class="row">

                    {/* <div class="col-lg-3 izquierda py-5 px-5">
                        <h2 class="h3 pb-4">Categorias</h2>
                        <Filter/>
                        </div> */}

                    <div>
                        <form>
                            <label>
                                Brand
                            </label>
                            <select
                                onChange={handleFilter}
                                ref={brands}
                                 multiple
                            >
                                <optgroup>
                                    <option value="" selected>All</option>
                                    <option value="brand[]=Nike">Nike</option>
                                    <option value="brand[]=Puma">Puma</option>
                                </optgroup>
                            </select>
                            <label>
                                Size
                            </label>

                            <select
                                onChange={handleFilter}
                                ref={sizes}
                                multiple
                            >
                                <optgroup>
                                    <option value="" selected>All</option>
                                    <option value="size[]=40">40</option>
                                    <option value="size[]=42">42</option>
                                </optgroup>
                            </select>
                            <label>
                                Gender
                            </label>
                            <select
                                onChange={handleFilter}
                                ref={genders}
                                multiple
                            >
                                <optgroup>
                                    <option value="" selected>All</option>
                                    <option value="gender[]=Hombre">masculino</option>
                                    <option value="gender[]=Mujer">femenino</option>
                                </optgroup>
                            </select>
                            <label>
                                Style
                            </label>
                            <select
                                onChange={handleFilter}
                                ref={styles}
                                multiple
                            >
                                <optgroup>
                                    <option value="" selected>All</option>
                                    <option value="style[]=Outdoor">outdoor</option>
                                    <option value="style[]=Tenis">tenis</option>
                                </optgroup>
                            </select>
                            <label>
                                Color
                            </label>
                            <select
                                onChange={handleFilter}
                                ref={colors}
                                multiple
                            >
                                <optgroup>
                                    <option value="" selected>All</option>
                                    <option value="color[]=Blanco">Blanco</option>
                                    <option value="color[]=Negro">Negro</option>
                                </optgroup>
                            </select>
                        </form>
                    </div>

                    <div class="col-lg-12 justify-content-center align-items-center align-items-center">

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-inline shop-top-menu pb-3 pt-1">

                                </ul>
                            </div>
                            {/* <div class="col-md-6 pb-4 py-5">
                                <div class="d-flex">
                                    <div class="input-group mb-3">
                                         <i class="fa fa-search p-3" aria-hidden="true"></i>
                                        <input type="text" class="form-control" placeholder="Buscar por nombre o marca" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row justify-content-around">
                            < Cards allZapatillas={filter ? zapatilla : allZapatillas} />
                        </div>

                    </div>

                    <div class="container mt-5">

                    </div>

                </div>
            </div>

            <div>
                <form>
                    <label>
                        Brand
                    </label>
                    <select 
                        onChange={handleFilter}
                        ref={brands}
                    >
                        <optgroup>
                            <option value="" selected>All</option>
                            <option value="brand[]=Nike">Nike</option>
                        </optgroup>
                    </select>
                </form>
            </div>

        </div>


    )
}

export default Product