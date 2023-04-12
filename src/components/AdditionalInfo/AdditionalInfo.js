import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits, getMovieReviews } from '../../api/themoviedb';
import Cast from '../Cast/Cast';
import Review from '../Reviews/Reviews';

const AdditionalInfo = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCreditsAndReviews = async () => {
      try {
        const creditsResponse = await getMovieCredits(movieId);
        setCredits(creditsResponse.data.cast);
        const reviewsResponse = await getMovieReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreditsAndReviews();
  }, [movieId]);

  return (
    <div>
      <Cast cast={credits} />
      <Review reviews={reviews} />
    </div>
  );
};

export default AdditionalInfo;
