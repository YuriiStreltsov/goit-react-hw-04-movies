import React from 'react';
import { NavLink } from 'react-router-dom';

function MoviesList({ movies }) {
  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesList;
