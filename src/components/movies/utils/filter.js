import _ from "lodash";

export function filterGenres(currentGenre, movies) {
  const filterMovies = _(movies)
    .filter(movie => movie.genre._id === currentGenre._id)
    .value();
  return filterMovies;
}
