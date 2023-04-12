import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api/themoviedb';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTrendingMovies();
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> */}
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
