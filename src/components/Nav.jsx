import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { getCategories, getReviews } from "./api";




export default function Nav({ filter, setFilter, setReviews,reviews }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (filter) {
      const filteredReviews = reviews.filter(
        (review) => review.category === filter
      );
      setReviews(filteredReviews);
   
    } 
  }, [filter]);

  function resetReviews() {
    getReviews()
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      })
      getCategories().then((categoriesFromApi) => {
        setCategories(categoriesFromApi);
        setIsLoading(false);
      });
  }

  function handleDropDown(e) {
    setFilter(e.target.value)
    setCategories([e.target.value]);
  }

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <label>
        Sort by Category
        <select key={uuidv4()} onChange={(e) => handleDropDown(e)}>
          {categories.map((category) => (
            <option key={uuidv4()} value={category.slug}>
              {category.slug}
            </option>
          ))}
        </select>
      </label>

      <button onClick={(e) => resetReviews()}>reset filter</button>
    </>
  );
}
