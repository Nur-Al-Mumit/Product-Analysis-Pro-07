import React from "react";

const ReviewDetails = ({ data }) => {
  const {
    profile_name,
    review_text,
    review_title,
    reviewed_at,
    review_country,
  } = data;
    // console.log(data);
  return (
    <div className="review-cart">
      <h1>{profile_name.lenght}</h1>
      <h3>{review_title}</h3>
      <p>{review_text}</p>
      <p>{review_country}</p>
      <p>{reviewed_at}</p>
    </div>
  );
};

export default ReviewDetails;
