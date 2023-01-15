import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import RatingList from "./components/RatingList";
import CategoryList from "./components/CategoryList";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Star from "./components/Star";
import moviesData from "./data/moviedata";
import categoryData from "./data/categoryData";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [Movie, setMovieState] = useState(false);
  const [Ratings, setRatings] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let movielist = [];

    if (searchValue) {
      movielist = moviesData.filter((movieitem) => {
        return movieitem.Title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      });
    }

    if (Ratings.length > 0) {
      if (movielist.length > 0) {
        movielist = movielist.filter((movieitem) => {
          if (Ratings.indexOf(movieitem.Rating) > -1) {
            return movieitem;
          }
        });
      } else {
        movielist = moviesData.filter((movieitem) => {
          if (Ratings.indexOf(movieitem.Rating) > -1) {
            return movieitem;
          }
        });
      }
    }

    if (Genres.length > 0) {
      if (movielist.length > 0) {

        movielist = movielist.filter((movieitem) => {
          if (Genres.indexOf(movieitem.Category.toLowerCase()) > -1) {
            return movieitem;
          }
        });
      } else {
        if (Ratings.length > 0) {

          setMovies([]);
        } else {

          movielist = moviesData.filter((movieitem) => {
            if (Genres.indexOf(movieitem.Category.toLowerCase()) > -1) {
              return movieitem;
            }
          });
        }
      }
    }


    if (movielist.length > 0) {
      setMovies(movielist);
    } else {
      if (Ratings.length > 0) {
        if (Genres.length > 0) {
          setMovies(moviesData);
        } else {
          setMovies([]);
        }
      } else {
        if (Genres.length > 0) {
          setMovies(movielist);
        } else {
          setMovies(moviesData);
        }
      }
    }
  }, [searchValue, Ratings, Genres]);

  const SearchMovie = (value) => {
    setSearchValue(value);
    setRatings([]);
    setGenres([]);
  };

  const RatingMovieList = (checkboxvalue, ratingvalue) => {
    setMovieState(true);
    if (checkboxvalue) {
      if (!Ratings.indexOf(ratingvalue) > -1) {
        setRatings((Ratings) => [...Ratings, ratingvalue]);
      }
    } else {
      setRatings(Ratings.filter((item) => item !== ratingvalue));
    }
  };
  const TitleMovieList = (checkboxvalue, titlevalue) => {
    setMovieState(true);
    if (titlevalue == "Any Genre") {
      setMovieState(true);
      setRatings([]);
    } else {
      if (checkboxvalue) {
        if (!Genres.indexOf(titlevalue.toLowerCase()) > -1) {
          setGenres((Genres) => [...Genres, titlevalue.toLowerCase()]);
        }
      } else {
        setGenres(Genres.filter((item) => item !== titlevalue.toLowerCase()));
      }
    }
  };

  const clearRatings = () => {
    setMovieState(true);
    setRatings([]);
  };
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="form_demo">
              <div className="row">
                <div className="col-md-6">
                  <SearchBox
                    searchValue={searchValue}
                    SearchMovie={(value) => SearchMovie(value)}
                    ShowMovieList={() => setMovieState(true)}
                  />
                </div>
                <div className="col-md-3">
                  <RatingList
                    RatingMovieList={(checkboxvalue, ratingvalue) =>
                      RatingMovieList(checkboxvalue, ratingvalue)
                    }
                    clearRatings={() => {
                      clearRatings();
                    }}
                  />
                </div>
                <div className="col-md-3">
                  <CategoryList
                    categoryData={categoryData}
                    TitleMovieList={(checkboxvalue, titlevalue) =>
                      TitleMovieList(checkboxvalue, titlevalue)
                    }
                  />
                </div>
                <div className="col-md-6">
                  {Movie ? <MovieList movies={movies} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
