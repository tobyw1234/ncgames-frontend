import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getComments } from './api';


export default function CommentsCards({ isLoading, setIsLoading, comments, setComments }) {
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);

    });
  }, [review_id]);

  return <div> bacon </div>;
}
