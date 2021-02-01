import * as movieSearch_API from '../services/movieAPI/movieSearch-API';

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      {movieSearch_API.fetchMoviesTrending()}
    </>
  );
}
