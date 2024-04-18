// import './Review.css';
import { useState, useEffect } from 'react';
import { utilsStorage } from "../utils";
import { BsPencilSquare } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Review.css';
import { utilsStorage } from '../utils';

const Review = ({ id, score, message, userId, show, user }) => {


    const navigate = useNavigate();

    const [scoreArray, setScoreArray] = useState([]);
    let idUser = utilsStorage.getDataStorage("userSession").id;

    const currentUser = utilsStorage.getDataStorage("userSession");

    const scoreBucle = () => {
        const scoreArray = [];
        for (let i = 1; i <= score; i++) {
            scoreArray.push(i)
        }
        setScoreArray(scoreArray);
    };

    useEffect(() => {
        scoreBucle();
    }, []);

    const handleClick = () => {
        navigate('/editReview')
    }

    return show ? (
        <>

            <div className='review'>
                <div className='starDiv'>
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            {scoreArray.map(() => (
                                <i className="text-warning fa fa-star"></i>
                            )
                            )}
                        </li>
                    </ul>
                </div>
                {userId == idUser ?
                        <NavLink to={`/editReview/${id}`}>
                            <BsPencilSquare id={id} className='editReview' onClick={handleClick} />
                        </NavLink>
                    :   <BsPencilSquare id={id} className='editReviewDisabled' />}
                <p className='p'>{`${user.name}: ${message}`}</p>
            </div>

        </>
    ) : (
        <div></div>
    )
}

export default Review;
