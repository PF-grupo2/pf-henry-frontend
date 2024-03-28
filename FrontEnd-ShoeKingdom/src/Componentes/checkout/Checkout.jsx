import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const state = useSelector((state) => state.items);

    let total = 0;

    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className='list-group-item d-flex justify-content-between lh-sm'>
                <div>
                    <h6 className='my-0'>{item.title}</h6>
                </div>
                <span className='text-muted'>{item.price}</span>
            </li>
        );
    }

    return (
        <>
        <div className='container my-5'>
            <div className='row g-5'>
                <div className='cold-md-5 col-lg-4 order-md-last'>
                    <h4 className='d-flex justify-content-between align-items-center mb-3'>
                        <span className='text-primary'>Tu carrito</span>
                        <span className='badge bg-primary rounded-pill'>{state.length}</span>
                    </h4>
                    <ul className='list-group mb-3'>
                        {state.map(itemList)}

                        <li className='list-group-item d-flex justify-content-between'>
                            <span>Total</span>
                            <strong>${total}</strong>
                        </li>
                    </ul>

                    <form className='card p-2'>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Código de descuento' />
                            <button type='submit' className='btn btn-secondary'>Aplicar</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-7 col-lg-8'>
                    <h4 className='mb-3'>Dirección de envío</h4>
                    <form className='needs-validation' noValidate=''>
                        <div className='row g-3'>
                            <div className='col-sm-6'>
                                <label htmlFor='firstName' className='form-label'>Nombre</label>
                                <input type='text' className='form-control' id='firstName' placeholder='' value='' required='' />
                                <div className='invalid-feedback'>
                                    Nombre
                                </div>
                            </div>

                            <div className='col-sm-6'>
                                <label htmlFor='lastName' className='form-label'>Apellido</label>
                                <input type='text' className='form-control' id='lastName' placeholder='' value='' required='' />
                                <div className='invalid-feedback'>
                                    Apellido
                                </div>
                            </div>

                            <div className='col-12'>
                                <label htmlFor='username' className='form-label'>Nombre de usuario</label>
                                <div className='input-group has-validation'>
                                    <span className='input-group-text'>@</span>
                                    <input type='text' className='form-control' id='username' placeholder='Usuario' required='' />
                                    <div className='invalid-feedback'>
                                        Nombre de usuario
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <label htmlFor='email' className='form-label'>Email<span className='text-muted'></span></label>
                                <input type='email' className='form-control' id='email' placeholder='tu@ejemplo.com' />
                                <div className='invalid-feedback'>
                                    Ingrese una direccón de correo válido para actualizaciones de envío
                                </div>
                            </div>

                            <div className='col-12'>
                                <label htmlFor='address' className='form-label'>Dirección</label>
                                <input type='text' className='form-control' id='address' placeholder='Calle y numeración' required='' />
                                <div className='invalid-feedback'>
                                    Ingrese dirección del envío
                                </div>
                            </div>

                            <div className='col-12'>
                                <label htmlFor='address' className='form-label'>Dirección 2 <span className='text-muted'>(Opcional)</span></label>
                                <input type='text' className='form-control' id='address' placeholder='Calle y numeración' />
                            </div>

                            <div className='col-md-5'>
                                <label htmlFor='country' className='form-label'>País</label>
                                <select className='form-select' id='country' required=''>
                                    <option value=''>Seleccionar</option>
                                    <option>Argentina</option>
                                </select>
                                <div className='invalid-feedback'>
                                    Seleccionar país
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <label htmlFor='state' className='form-label'>Localidad</label>
                                <select className='form-select' id='state' required=''>
                                    <option value=''>Seleccionar</option>
                                    <option>Buenos Aires</option>
                                </select>
                            </div>

                            <div className='col-md-3'>
                                <label htmlFor='zip' className='form-label'>Código postal</label>
                                <input type='text' className='form-control' id='zip' placeholder='' required='' />
                                <div className='invalid-feedback'>
                                    Código postal
                                </div>
                            </div>
                        </div>

                        <hr className='my-4' />

                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='same-address' />
                            <label className='form-check-label' htmlFor='same-address'>La dirección de envío es la misma que mi dirección de facturación</label>
                        </div>

                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='save-info' />
                            <label className='form-check-label' htmlFor='save-info'>Guardar información para tu próxima compra</label>
                        </div>

                        <hr className='my-4' />

                        <h4 className='mb-3'>Pago</h4>

                        <div className='my-3'>
                            <div className='form-check'>
                                <input id='paypal' name='paymentMethod' type='radio' className='form-check-input' required='' />
                                <label className='form-check-label' htmlFor='paypal'>Mercado Pago</label>
                            </div>
                        </div>

                        <hr className='my-4' />

                        <button className='w-100 btn btn-primary btn-lg' type='submit'>Ver comprobante</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout;