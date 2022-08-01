import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import React from "react";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import SingleReview from "./components/SingleReview";
import Nav from "./components/Nav";
import CommentsCards from "./components/commentsCards";

function App() {
  const [filter, setFilter] = useState("");
  const [reviews, setReviews] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState({});

  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav
          filter={filter}
          setFilter={setFilter}
          setReviews={setReviews}
          reviews={reviews}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Reviews
                filter={filter}
                setReviews={setReviews}
                reviews={reviews}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />

          <Route
            path="/reviews/:review_id"
            element={
              <SingleReview
                filter={filter}
                setReviews={setReviews}
                reviews={reviews}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                comments={comments}
                setComments={setComments}
              />
            }
          />

          <Route
            path="category/:category"
            element={
              <Reviews
                filter={filter}
                setReviews={setReviews}
                reviews={reviews}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />

          <Route
            path=":review_id/comments"
            element={
              <CommentsCards
                comments={comments}
                setComments={setComments}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
