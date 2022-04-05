import React from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import "./Review.css";

const Review = ({ data }) => {
//   console.log(data);
  return (
    <div className="review-cart">
        <ReviewDetails data={data}></ReviewDetails>
    </div>
  );
};

export default Review;
