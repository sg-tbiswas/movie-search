import React, { useState, useEffect } from "react";
import RatingList from "./RatingList";
const CategoryList = ({ categoryData,TitleMovieList }) => {
  const [menuActive, setMenuState] = useState(false);

  const listItems = categoryData.map((cat,index) => (
    <li key={index}>
      <a className="option-link" href="#">
        <label>
          <input
            name="options[]"
            type="checkbox"
            className="option justone"
            onClick={(event) => TitleMovieList(event.target.checked,cat.Category)}
          />{" "}
          {cat.Category}
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
          <span className="dropdown-text">Genre(s)</span>
          <span className="fa fa-angle-down"></span>
        </button>
        <ul className={`dropdown-menu ${menuActive ? "show" : ""}`}>
          <li className="divider"></li>
          {listItems}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
