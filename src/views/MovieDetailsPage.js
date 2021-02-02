import { Component } from 'react';
import * as movieSearchAPI from '../services/movieAPI/movieSearch-API';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieSearchAPI.fetchMovieById(movieId);
    this.setState({ movie: response.data });
  }

  render() {
    const { movie } = this.state;
    const { url } = this.props.match;
    return (
      <>
        <h2>Movie</h2>

        {movie && (
          <>
            <div className="MovieImg">
              <button type="button">&#8592; Go back</button>
              <img
                className="image-by-id"
                src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="MoviDesc">
              <h2 className="title">{movie.original_title}</h2>
              <p>User score: {movie.vote_average * 10} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {console.log(movie.genres)}
              <p>
                {movie.genres && movie.genres.length > 0
                  ? movie.genres.map(ganre => ganre.name).join(' ')
                  : 'No data'}
              </p>
            </div>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
