import React from "react";
import search from "../../assets/images/search.svg"
import "./searchBar.scss"
const SearchBar = () => {
  return (
    <>
      <div className="searchBarContainer">
        <div className="imageWrapper">
            <img src={search} alt="search" />
        </div>
        <input type="text" className="searchBarInput" placeholder="Find a doctor"/>
      </div>
    </>
  );
};

export default SearchBar;
