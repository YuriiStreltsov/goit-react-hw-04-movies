import React from 'react';
import originPath from '../../path';
import './MovieMainInfo.scss';

const MovieMainInfo = ({ movie, defaultImg }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  const userScore = vote_average * 10;

  const imgPath = `${originPath.imagePoster}/${poster_path}`;
  const imgUrl = poster_path ? imgPath : defaultImg;

  return (
    <>
      <button className="button-back" type="button">
        &#8592; Go back
      </button>
      <div className="movie-main-info">
        <div className="MovieImg">
          <img className="poster" src={imgUrl} alt={title} />
        </div>

        <div className="MovieDesc">
          <h2 className="title">{title}</h2>
          <p className="text">User score: {userScore} %</p>
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : <p>No data</p>}

          <h3>Genres</h3>

          <p>
            {genres && genres.length > 0 ? (
              genres.map(ganre => ganre.name).join(' ')
            ) : (
              <p>No data</p>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieMainInfo;
