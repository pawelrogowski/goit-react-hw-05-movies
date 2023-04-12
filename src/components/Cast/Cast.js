import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api';
import NotFoundImage from '../../images/portrait-not-found.png';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => {
      setCredits(data.cast);
    });
  }, [movieId]);

  if (!credits) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <ul>
        {credits.map(credit => (
          <li key={credit.id}>
            <img
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w185${credit.profile_path}`
                  : NotFoundImage
              }
              width="185"
              height="278"
              alt={credit.name}
            />
            <p>{credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
