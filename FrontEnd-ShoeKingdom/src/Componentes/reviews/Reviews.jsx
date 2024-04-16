import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../../Redux/Actions/actions';
import Review from '../review/Review';

const Reviews = ({ productId }) => {
    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state);
    console.log(reviews, productId)

    useEffect(() => {
        dispatch(getAllReviews());
    }, [dispatch])

    return (
        <div>
            {
                reviews?.map((review) => {
                    return (
                        <Review 
                        key = {review?.id}
                        score = {review?.score}
                        message = {review?.message}
                        show = {review?.ProductId == productId}
                         />
                    )
                })
            }
        </div>
    )
}

export default Reviews;