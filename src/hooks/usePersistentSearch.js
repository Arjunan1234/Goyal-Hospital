// src/hooks/usePersistentSearch.js
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePersistentSearch = (key = "searchValue") => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState(() => {
    return localStorage.getItem(key) || "";
  });

  // Sync search value to localStorage on change
  useEffect(() => {
    localStorage.setItem(key, searchValue);
  }, [key, searchValue]);

  // Clear search value on route change (except /book-appointment)
  useEffect(() => {
    if (location.pathname !== "/book-appointment") {
      setSearchValue("");
      localStorage.removeItem(key);
    }
  }, [location.pathname, key]);

  return [searchValue, setSearchValue];
};

export default usePersistentSearch;
