import React from "react";
import RatingList from "./RatingList";
import Star from './Star';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="serachbox" key={index}>
          <div className="serach_info">
            <div className="serach_right">
              <h4>{movie.Title}</h4>
              <Star label={movie.Rating} noofstar= {10}/>
            </div>
            <div className="search_left">
              <p>{movie.Category}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
