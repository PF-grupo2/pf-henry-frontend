import './Score.css';
import axios from 'axios';
import React, { useState } from 'react';
import { utilsStorage } from '../utils';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const AddReview = ({ ProductId }) => {

    const navigate = useNavigate()

    const [scoreNum, setScoreNum] = useState(null);
    const [hover, setHover] = useState(null);

    let idUser = utilsStorage.getDataStorage("userSession").id;
    const zapatillas = useSelector((state) => state.zapatillaDetail);

    const [formData, setFormData] = useState({
        score: 0,
        message: "",
        ProductId: zapatillas.id,
        UserId: idUser
    });

    const handleChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };

    const hanldeSubmit = async (event) => {
        event.preventDefault();
        try {
            const createReview = await axios.post(`https://pf-henry-backend-agsr.onrender.com/api/v1/review/review`, formData);
            alert('Tu opinión fue enviada', createReview.data)
            navigate(`/product/${zapatillas.id}`)
        } catch (error) {
            console.error('No se puedo enviar la opinión', error)
            alert('Hubo un error al enviar tu opinión. Por favor, inténtalo de nuevo')
        }
    };


    return (
        <div className="modal-body modal-style">
            <form className="modal-body modal-style" onSubmit={hanldeSubmit}>
                <div class="mb-3">
                    <h5 className="fw-bold mb-4 h5">Contanos que te pareció tu producto</h5>
                    {[...Array(5)].map((star, i) => {
                        const currentScore = i + 1;
                        return (
                            <label>
                                <input
                                    className='starInput'
                                    type='radio'
                                    name="score"
                                    value={currentScore}
                                    onClick={() => setScoreNum(currentScore)}
                                    onMouseEnter={() => setScoreNum(currentScore)}
                                    onChange={handleChange}
                                    onMouseLeave={() => setScoreNum(null)}
                                />
                                <FaStar
                                    className='star'
                                    size={20}
                                    color={currentScore <= (hover || scoreNum) ? "#ffc107" : "#e4e5e9"}
                                />
                            </label>
                        );
                    })}
                    <p>Tu calificación es {scoreNum}</p>
                    <input className="form-control" id="exampleFormControlTextarea1" name="message" rows="7" placeholder='Mi producto me pareció...' onChange={handleChange} />
                    <button type='submit' className="btn btn-outline-primary mx-2">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default AddReview;