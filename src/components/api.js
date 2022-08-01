import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-toby-w.herokuapp.com/api",
});

export const getReviews = (review_id, category) => {
  return gamesApi
    .get("/reviews", { params: { review_id, category } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getSingleReview = (review_id, category) => {
  return gamesApi
    .get(`/reviews/${review_id}`, { params: { review_id, category } })
    .then(({ data }) => {
      return data;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const patchVotes = (review_id, voteVal) => {
  const voteUpdate = {inc_votes: voteVal}
  return gamesApi.patch(`/reviews/${review_id}`, voteUpdate)
  .then(res=>res.data)
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}