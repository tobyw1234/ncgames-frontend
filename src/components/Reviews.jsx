import { useEffect } from "react"
import { getReviews } from "./api"
import { useParams, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
const dayjs = require("dayjs");



export default function Reviews({ filter, setFilter, setReviews, reviews, setIsLoading, isLoading }) {
  const { review_id, category } = useParams();
const navigate = useNavigate();


  useEffect(() => {
    getReviews(review_id, category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [review_id, category, setIsLoading, isLoading, setReviews]);

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="grid-container">
      {reviews.map((review) => {
        const dateCreated = dayjs(review.created_at);
        return (
          <ul className="grid-item" key={uuidv4()}>
            <h3 key={uuidv4()}>{review.title}</h3>
            <li key={uuidv4()}>Category {review.category}</li>
            <li key={uuidv4()}>
              Created on{" "}
              {dateCreated.$D + "/" + dateCreated.$M + "/" + dateCreated.$y}
            </li>
            <li key={uuidv4()}>By {review.owner}</li>
            <button onClick={() => { navigate(`/reviews/${review.review_id}`) }}>See More</button>
          </ul>
        );
      })}
    </div>
  );
}



