import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import React from "react";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import SingleReview from "./components/SingleReview";

function App() {
  const [filter, setFilter] = useState("");
  const [reviews, setReviews] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
      

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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
