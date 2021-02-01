import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as movieSearch_API from '../services/movieAPI/movieSearch-API';

export default function HomePage() {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieSearch_API.fetchMoviesTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      {console.log(movies)}
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${url}/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
