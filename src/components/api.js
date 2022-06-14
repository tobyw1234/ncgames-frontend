import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-toby-w.herokuapp.com/api",
});

export const getReviews = (review_id) => {
 return gamesApi
  .get("/reviews", { params: { review_id } })
  .then(({ data }) => {
  return data.reviews
 })
}


export const getCategories = () => {
  return gamesApi
    .get("/categories")
    .then(({ data }) => {
      return data.categories
    })
    }
