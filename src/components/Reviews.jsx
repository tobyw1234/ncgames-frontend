import { useState, useEffect } from "react"
import { getReviews } from "./api"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
const dayjs = require("dayjs");



export default function Reviews({ filter, setFilter, setReviews, reviews }) {
  const [isLoading, setIsLoading] = useState(false);

  const { review_id, category } = useParams();
  

  useEffect(() => {
    getReviews(review_id,category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [review_id, category]);

  

 

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
          </ul>
        );
      })}
    </div>
  );
}



