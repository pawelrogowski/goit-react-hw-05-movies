import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import { getTrendingMovies } from '../api/themoviedb';

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home getTrendingMovies={getTrendingMovies} />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Home getTrendingMovies={getTrendingMovies} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
