import { useState, useEffect } from "react";
import { getSingleReview } from "./api";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";


export default function SingleReview({ isLoading, setIsLoading }) {

  const [review, setReview] = useState({
    "reviews": {
    }
  });
  const { review_id } = useParams();

 
 

  console.log(review_id, "singlereview");
  useEffect(() => {
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  function upVote() {
   return review.reviews.votes  += 1
  }

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="grid-container">
      <section id="singleReview">
        <h1>{review.reviews.title}</h1>
        <p>designer: {review.reviews.designer}</p>
        <p>owner: {review.reviews.owner}</p>
        <p>category: {review.reviews.category}</p>
        <img
          id="singleReviewImg"
          alt="no"
          src={`${review.reviews.review_img_url}`}
        />
        <p>{review.reviews.review_body}</p>
        <p>
          Current votes: {review.reviews.votes}{" "}
          <button onClick={() => { upVote() }}>Upvote</button>{" "}
          <button>Downvote</button>
        </p>
      </section>
      {console.log(review.reviews, "review_id")}
    </div>
  );
}
