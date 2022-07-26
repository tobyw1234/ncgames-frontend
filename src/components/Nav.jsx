import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { getCategories, getReviews } from "./api";


export default function Nav({ filter, setFilter, setReviews, reviews, setIsLoading, isLoading }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // getCategories().then((categoriesFromApi) => {
    //   setIsLoading(true);
    //   categoriesFromApi.unshift({ slug: "All Categories" });
    //   setCategories(categoriesFromApi);
      
    //   setIsLoading(false);
    resetReviews()
    },[])
  

  useEffect(() => {
    setIsLoading(true);
    if (filter) {
      const filteredReviews = reviews.filter(
        (review) => review.category === filter
      );
      setReviews(filteredReviews);

      const filteredCats = categories.filter(
        (category) => category.slug === filter
      );
      filteredCats.push({slug:"All Categories"})

      setCategories(filteredCats);
      setIsLoading(false);

    }
  }, [filter]);

  function resetReviews() {
    setIsLoading(true);
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });

    getCategories().then((categoriesFromApi) => {
      categoriesFromApi.unshift({ slug: "All Categories" });
      setCategories(categoriesFromApi);
      navigate("/");
      setIsLoading(false);
    });
  }

  const navigate = useNavigate();
  function handleDropDown(e) {

    setFilter(e.target.value);
    if (e.target.value === "All Categories") {
      navigate("/")
      resetReviews();
    } else {
    
      navigate(`category/${e.target.value}`)
    }
    
    console.log([e.target.value]);
    console.log(categories);
    

  }

  if (isLoading) return <p>Loading</p>;

  return (
    <div id="nav">
      <label>
        Sort by Category
        <select id="dropDown" key={uuidv4()} onChange={(e) => handleDropDown(e)}>
          {categories.map((category) => (

            <option
              key={uuidv4()}
              value={category.slug}
              onClick={() => {
                navigate();
              }}>

              {category.slug}
            </option>
          ))}
        </select>
      </label>

      <button id={uuidv4()} onClick={(e) => resetReviews()}>Home</button>
    </div>

  );
}
