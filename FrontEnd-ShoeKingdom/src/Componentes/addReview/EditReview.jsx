import axios from 'axios';
import { BASE_URL } from "../../config";
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditReview = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const zapatillas = useSelector((state) => state.zapatillaDetail);

    const [scoreNum, setScoreNum] = useState(null);
    const [hover, setHover] = useState(null);

    const [formData, setFormData] = useState({
        message: "",
    });

    const handleChange = (event) => {
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    console.log("Editar review", formData)


    useEffect(() => {
        setFormData({
            message: "",
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const editReview = await axios.put(`${BASE_URL}/review/review/${id}`, formData);
            Swal.fire({
                icon: "success",
                title: "Tu opinión fue actualizada",
            }, editReview);
            navigate(`/product/${zapatillas.id}`);
        } catch (error) {
            console.error("No se pudo actualizar tu opinión", error);
            Swal.fire({
                icon: "error",
                title: "Hubo un error al actualizar tu opinión",
                text: "Por favor inténtalo de nuevo",
            });
        }
    };

    return (
        <form className="container text-center" onSubmit={handleSubmit}>
            <div className='containerReview py'>
                <h5 className="fw-bold mb-4 h5">Contanos que te pareció tu producto</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="2" placeholder='Mi producto me pareció...' onChange={handleChange}></textarea>
                <button type='submit' className="btn btn-outline-primary mx-2 col-lg-3 m-4">Guardar</button>
            </div>
        </form>
    )
}

export default EditReview;