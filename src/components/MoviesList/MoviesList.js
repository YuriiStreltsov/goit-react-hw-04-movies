import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesList.scss';

function MoviesList({ movies, location }) {
  return (
    <>
      {movies && (
        <ul className="MoviesList">
          {movies.map(movie => (
            <li key={movie.id} className="item">
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default withRouter(MoviesList);
