import { useState, useEffect } from "react";
import { getSingleReview, patchVotes } from "./api";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

export default function SingleReview({ isLoading, setIsLoading }) {
  const [votes, setVotes] = useState(0);
  const [upVoteButton, setUpVoteButton] = useState(false)
  const [downVoteButton, setDownVoteButton] = useState(false);
  const [review, setReview] = useState({ reviews: {} });
  const { review_id } = useParams();


  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi)
      
      setIsLoading(false);
    });
  }, [review_id]);

  useEffect(() => {setVotes(review.reviews.votes); },[review])
    

  
  function upVote(review_id) {
    console.log(votes);
    setVotes((votes) => votes + 1)
    patchVotes(review_id, votes);
  }

   function downVote(review_id) {
     console.log(votes);
     setVotes((votes) => votes - 1);
     patchVotes(review_id, votes);
   }

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <section id="singleReview">
        <h1>{review.reviews.title}</h1>
        <p>designer: {review.reviews.designer}</p>
        <p>owner: {review.reviews.owner}</p>
        <p>category: {review.reviews.category}</p>
        <img
          id="singleReviewImg"
          alt="no"
          title="test"
          src={`${review.reviews.review_img_url}`}
        />
        <p>{review.reviews.review_body}</p>
        <p>
          Current votes: {votes}
          <button
            disabled={upVoteButton}
            onClick={() => {
              upVote(review.reviews.review_id);
              setUpVoteButton(true);
              setDownVoteButton(false);
            }}
          >
            Upvote
          </button>{" "}
          <button
            disabled={downVoteButton}
            onClick={() => {
              downVote(review.reviews.review_id);
              setDownVoteButton(true);
              setUpVoteButton(false);
            }}
          >
            Downvote
          </button>
        </p>
      </section>
    </div>
  );
}
