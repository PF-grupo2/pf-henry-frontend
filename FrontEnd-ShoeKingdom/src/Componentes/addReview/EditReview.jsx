import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditReview = () => {
    return (
        <form className="container text-center" onSubmit={hanldeSubmit}>
                <div className='containerReview py'>
                    <h5 className="fw-bold mb-4 h5">Contanos que te pareció tu producto</h5>
                    <div>
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
                    </div>
                   
                    <p>Tu calificación es {scoreNum}</p>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="2" placeholder='Mi producto me pareció...' onChange={handleChange}></textarea> 
                    <button type='submit' className="btn btn-outline-primary mx-2 col-lg-3 m-4">Guardar</button>
                </div>
            </form>
    )
}

export default EditReview;