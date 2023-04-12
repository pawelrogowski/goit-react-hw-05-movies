import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../api/themoviedb';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const history = useNavigate();

  const handleSearch = async query => {
    const response = await searchMovies(query);
    setMovies(response.data.results);
  };

  const handleMovieClick = movieId => {
    history.push(`/movies/${movieId}`);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
    </div>
  );
};

export default Movies;
