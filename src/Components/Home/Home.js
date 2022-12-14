import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../Hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [data] = useReviews();
  const newData = data.slice(0, 3);
  return (
    <div>
      <div>
        <h1>Welcome to your Talking Shop</h1>
      </div>
      <div className="product-container">
        <div className="product-info">
          <h1>Amazon Echo - Black (1st Generation)</h1>
          <ul>
            <li>
              Plays all your music from Amazon Music, Spotify, Pandora,
              iHeartRadio, TuneIn, and more using just your voice
            </li>
            <li>
              Call or message anyone hands-free with your Echo device. Also,
              instantly connect to other Echo devices in your home using just
              your voice.
            </li>
            <li>
              Fills the room with immersive, 360? omni-directional audio. Play
              music simultaneously across Echo devices with multi-room music
              (Spotify and Sirius XM support coming soon).
            </li>
            <li>
              Controls lights, fans, TVs, switches, thermostats, garage doors,
              sprinklers, locks, and more with compatible connected devices from
              WeMo, Philips Hue, Sony, Samsung SmartThings, Nest, and others
            </li>
          </ul>
        </div>
        <div>
          <img
            className="product-img"
            src="https://m.media-amazon.com/images/I/61aN+SE-F9L._AC_SX569_.jpg"
            alt="img"
          ></img>
        </div>
      </div>
      <div>
        <div className="review-container">
          {newData.map((review) => (
            <Review key={review.id} data={review}></Review>
          ))}
        </div>
        <div className="reviews-btn">
          <Link to="/Reviews">View All</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
