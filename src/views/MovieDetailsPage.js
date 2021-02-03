import { Component } from 'react';
import * as movieSearchAPI from '../services/movieAPI/movieSearch-API';
import defaultImg from '../../src/default.jpg';

import MovieOtherInfo from '../components/MovieInfo/MovieOtherInfo';
import MovieMainInfo from '../components/MovieInfo/MovieMainInfo';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieSearchAPI.fetchMovieById(movieId);
    this.setState({ movie: response.data });
  }

  render() {
    return (
      <div className="MovieDetailsPage">
        {this.state.movie !== null && (
          <>
            <MovieMainInfo movie={this.state.movie} defaultImg={defaultImg} />
            <MovieOtherInfo
              url={this.props.match.url}
              path={this.props.match.path}
            />
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
