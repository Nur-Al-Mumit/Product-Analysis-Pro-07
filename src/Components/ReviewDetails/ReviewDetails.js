import React from "react";
import "./ReviewDetails.css"

const ReviewDetails = ({ data }) => {
  const {
    profile_name,
    review_text,
    review_title,
    reviewed_at,
    review_country,
    profile,
    rating,
  } = data;
    // console.log(data);
  return (
    <div className="review-cart">
      <img className="profile-img" src={profile} alt="img"></img>
      <h1>{profile_name}</h1>
      <h3>Rating: {rating}</h3>
      <h3>{review_title}</h3>
      <p>{review_text.length > 300 ? review_text.slice(0, 300) + "...": review_text}</p>
      <p>{review_country}</p>
      <p>{reviewed_at}</p>
    </div>
  );
};

export default ReviewDetails;
