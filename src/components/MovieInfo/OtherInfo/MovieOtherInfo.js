import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import './MovieOtherInfo.scss';

// ({ url, path }) =>
class MovieOtherInfo extends Component {
  state = {};

  render() {
    const { url, path } = this.props;
    return (
      <div className="movie-other-info">
        <h3 className="title">Additional information</h3>
        <ul>
          <li className="item">
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li className="item">
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </div>
    );
  }
}

export default MovieOtherInfo;
