import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';


function Reviews(props) {
  return (
    <>
      <ul className="reviews">
        {props.reviews && props.reviews.map((review) => {
          return <li key={review.id} className="reviews__item"><Link to={`/reviews/${review.id}`}>{review.title}</Link></li>
        })}
      </ul>
    </>
  )
}

export default Reviews;