import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector((state) => state.movieReducer.movies);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        className="col-md-5 my-3"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="d-flex justify-content-around flex-wrap ">
        {movies
          .filter((movie) =>
            movie.title.toUpperCase().trim().includes(text.toUpperCase().trim())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
