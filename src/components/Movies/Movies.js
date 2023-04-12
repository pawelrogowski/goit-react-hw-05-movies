import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api/themoviedb';

function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    try {
      const { data } = await searchMovies(query);
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Search for a movie</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {results.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
        </div>
      ))}
    </>
  );
}

export default Movies;
