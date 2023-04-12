import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies, searchMovies } from '../../api/themoviedb';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then(response => setMovies(response.data.results));
    } else {
      getTrendingMovies().then(response => setMovies(response.data.results));
    }
  }, [searchQuery]);

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          Search movies:
          <input type="text" value={searchQuery} onChange={handleSearchQueryChange} />
        </label>
        <button type="button" onClick={() => setSearchQuery('')}>
          Clear
        </button>
      </form>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieList;
