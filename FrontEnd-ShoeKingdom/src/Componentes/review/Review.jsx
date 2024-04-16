// import './Review.css';
import { useState, useEffect } from 'react';

const Review = ({ score, message, show }) => {

    const [scoreArray, setScoreArray] = useState([]);

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

    return show ? (
        <>

           <div>
           <ul className="list-unstyled d-flex justify-content-between">
                <li>
                    {scoreArray.map(() => (
                        <i className="text-warning fa fa-star"></i>
                    )
                    )}
                </li>
            </ul>
           </div>
            <div>
                <p>{message}</p>
            </div>

        </>
    ) : (
        <div></div>
    )
}

export default Review;