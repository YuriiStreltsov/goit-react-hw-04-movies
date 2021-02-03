import { Component } from 'react';
import * as movieSearchApi from '../../services/movieAPI/movieSearch-API';
import originPath from '../../path';

class Cast extends Component {
  state = {
    info: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieSearchApi.fetchMovieCastInfo(movieId);
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;
    return (
      <>
        {info !== null && (
          <ul>
            {info.cast.map(elem => (
              <li key={elem.id}>
                <img src={`${originPath.imageProfile}${elem.profile_path}`} />
                {elem.original_name}
                <p>Character: {elem.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
