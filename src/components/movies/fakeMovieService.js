const movies = [
  {
    _id: "000001",
    Title: "Terminator",
    genre: { _id: "000001", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "000002",
    Title: "Terminator2",
    genre: { _id: "000002", name: "Action" },
    numberInStock: 13,
    dailyRentalRate: 3.5,
    publishDate: "2019-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {}
