import React from "react";
import search from "../../assets/images/search.svg";
import "./searchBar.scss";
const SearchBar = ({
  placeHolerText = "Find a doctor",
  value,
  onChange,
  onFocus,
}) => {
  return (
    <>
      <div className="searchBarContainer">
        <div className="imageWrapper">
          <img src={search} alt="search" />
        </div>
        <input
          type="text"
          className="searchBarInput"
          placeholder={placeHolerText}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default SearchBar;
