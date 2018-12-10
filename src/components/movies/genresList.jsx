import React from "react";

const GenresList = props => {
  const { genres, currentGenre, onGenreChange } = props;
  console.log(currentGenre);

  return (
    <ul className="list-group">
      <li
        className={
          currentGenre === "ALL GENRES"
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => onGenreChange({ name: "ALL GENRES" })}
      >
        ALL GENRES
      </li>
      {genres.map(genre => {
        return (
          <li
            className={
              currentGenre === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre.name}
            onClick={() => onGenreChange(genre)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
