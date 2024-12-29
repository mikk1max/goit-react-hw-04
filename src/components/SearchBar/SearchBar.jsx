import React from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch, page }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    onSearch(inputValue);
    e.target.reset();
  };

  return (
    <header className={s}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
