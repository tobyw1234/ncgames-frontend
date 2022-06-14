import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { getCategories } from "./api";




export default function Nav() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");

useEffect(() => {
  getCategories().then((categoriesFromApi) => {
    setCategories(categoriesFromApi);
    setIsLoading(false);
    
  });
}, []);

if (isLoading) return <p>Loading</p>;

return (
  <>
    <label>
      Sort by Category
      <select key={uuidv4()} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((category) => (
          <option key={uuidv4()} value={category.slug}>
            {category.slug}
          </option>
        ))}
      </select>
    </label>

    <button onClick={null}>Reset Filter</button>
  </>
);
}
