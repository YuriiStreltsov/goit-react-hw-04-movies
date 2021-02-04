import { Component } from 'react';
import * as movieSearchAPI from '../services/movieAPI/movieSearch-API';
import defaultImg from '../../src/default.jpg';
import routes from '../routes';

import MovieOtherInfo from '../components/MovieInfo/OtherInfo/MovieOtherInfo';
import MovieMainInfo from '../components/MovieInfo/MainInfo/MovieMainInfo';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieSearchAPI.fetchMovieById(movieId);
    this.setState({ movie: response.data });
  }

  handleGoback = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    return (
      <div className="MovieDetailsPage">
        {this.state.movie !== null && (
          <>
            <button
              className="button-back"
              type="button"
              onClick={this.handleGoback}
            >
              &#8592; Go back
            </button>
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
