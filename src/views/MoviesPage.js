import { react, Component } from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import * as movieSearchAPI from '../services/movieAPI/movieSearch-API';
import Form from '../components/Form/Form';

class MoviesPage extends Component {
  state = {
    movies: null,
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.query;
    const nextSearchQuery = this.state.query;
    if (prevSearchQuery !== nextSearchQuery) {
      const response = await movieSearchAPI.fetchMovieOnSubmit(nextSearchQuery);
      this.setState({ movies: response.data.results });
      console.log(response.data.results);
    }
  }

  handleSearch = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSearch} />
        <MoviesList movies={this.state.movies} />
        <Route path="" component={MoviesList} />
      </>
    );
  }
}

export default MoviesPage;
