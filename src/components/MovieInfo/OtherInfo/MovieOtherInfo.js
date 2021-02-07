import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import { withRouter } from 'react-router-dom';

import './MovieOtherInfo.scss';

class MovieOtherInfo extends Component {
  state = {};

  render() {
    const { match, location } = this.props;
    return (
      <div className="movie-other-info">
        <h3 className="title">Additional information</h3>
        <ul className="list">
          <li className="item">
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li>
          <li className="item">
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route
          path={`${match.url}/cast`}
          render={props => <Cast movieId={match.params.movieId} />}
        />
        <Route
          path={`${match.url}/reviews`}
          render={props => <Reviews movieId={match.params.movieId} />}
        />
      </div>
    );
  }
}

export default withRouter(MovieOtherInfo);
