import { useEffect, useState } from "react";

const useReviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data_reviews.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data, setData];
};
export default useReviews;
