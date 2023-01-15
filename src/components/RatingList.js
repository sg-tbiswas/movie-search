import React, { useState, useEffect } from "react";
import Star from "./Star";

const RatingList = (props) => {
  const [menuActive, setMenuState] = useState(false);

  let ratinglist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listItems = ratinglist.map((number) => (
    <li key={number}>
      <a className="option-link" href="#">
        <label>
          <input
            type="checkbox"
            className="option justone"
            onClick={(event) =>
              props.RatingMovieList(event.target.checked, number)
            }
          />{" "}
          <Star label={number} key={number} noofstar={10} />
        </label>
      </a>
    </li>
  ));

  return (
    <div className="cu_form">
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          onClick={() => setMenuState((prevMenuActive) => !prevMenuActive)}
        >
          <span className="dropdown-text">Rating</span>
          <span className="fa fa-angle-down"></span>
        </button>
        <ul className={`dropdown-menu ${menuActive ? "show" : ""}`}>
          <li>
            <a href="#">
              <label>
                <input
                  type="checkbox"
                  className="selectall"
                  onClick={(event) => props.clearRatings()}
                />
                <span className="select-text"> Any</span> Rating
              </label>
            </a>
          </li>
          <li className="divider"></li>
          {listItems}
        </ul>
      </div>
    </div>
  );
};

export default RatingList;
