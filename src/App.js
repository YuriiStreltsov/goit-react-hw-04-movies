import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import routes from './routes';

function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      </Switch>
    </>
  );
}

export default App;
