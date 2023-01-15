import React from "react";

const SearchBox = (props) => {
  return (
    <div className="cu_form">
      <input
      type="search"
      value={props.searchValue}
	  onChange={(event) => props.SearchMovie(event.target.value)}
      onClick={(event) => props.ShowMovieList()}
      placeholder="Enter Movies Name" />
    </div>
  );
};

export default SearchBox;
