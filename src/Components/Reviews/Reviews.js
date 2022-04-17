import useReviews from "../Hooks/useReview";
import Review from "../Review/Review";
import './Reviews.css'

const Reviews = () => {
  const [data] = useReviews();
  return (
    <div>
      <h1>Show All Reviews</h1>
      <div className="review-cart-container">
        {data.map((review) => (
          <Review key={review.id} data={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
