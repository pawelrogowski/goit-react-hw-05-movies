import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../api/themoviedb';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error ? <p>Something went wrong: {error.message}</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
