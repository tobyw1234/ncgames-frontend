import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import React from "react";
import Reviews from "./components/Reviews"
import Header from "./components/Header"
import Nav from "./components/Nav";




function App() {
  const [filter, setFilter] = useState("");
  const [reviews, setReviews] = useState([{}]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav
          filter={filter}
          setFilter={setFilter}
          setReviews={setReviews}
          reviews={reviews}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Reviews
                filter={filter}
                setReviews={setReviews}
                reviews={reviews}
              />
            }
          />

          <Route path="category/:category" element={
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
