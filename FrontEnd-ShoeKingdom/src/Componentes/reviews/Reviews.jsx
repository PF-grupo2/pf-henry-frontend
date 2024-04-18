import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../../Redux/Actions/actions';
import Review from '../review/Review';

const Reviews = ({ productId }) => {

    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state);
    
    let filteredReviews = []
    if(reviews) filteredReviews = reviews.filter(review => review.status)
    

    useEffect(() => {
        dispatch(getAllReviews());
    }, [dispatch])


    return (
        <div>
            {
                filteredReviews?.map((review) => {
                    return (
                        <Review 
                        key = {review?.id}
                        user = {review?.User}
                        id = {review?.id}
                        score = {review?.score}
                        message = {review?.message}
                        userId = {review?.UserId}
                        show = {review?.ProductId == productId}
                         />
                    )
                })
            }
        </div>
    )
}

export default Reviews;