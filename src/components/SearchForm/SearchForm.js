import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../api/themoviedb';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const history = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchMovies(query);
    setMovies(response.data.results);
  };

  const handleMovieClick = movie => {
    history.push(`/movies/${movie.id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} onClick={() => handleMovieClick(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
