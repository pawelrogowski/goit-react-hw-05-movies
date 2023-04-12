import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../api/themoviedb';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data: movieData } = await getMovieDetails(movieId);
        const { data: creditsData } = await getMovieCredits(movieId);
        const { data: reviewsData } = await getMovieReviews(movieId);
        setMovie(movieData);
        setCredits(creditsData.cast);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div>
          <p>User Score: {movie.vote_average * 10}%</p>
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres?.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <AdditionalInfo cast={<Cast cast={credits} />} reviews={<Reviews reviews={reviews} />} />
    </div>
  );
}

export default MovieDetails;
