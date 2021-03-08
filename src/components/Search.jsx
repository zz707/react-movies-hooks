import React, { useState, useEffect } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const applySearch = () => {
    searchMovies(search, type);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      applySearch();
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
  };

  useEffect(() => {
    applySearch();
  }, [type]);

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn search-btn" onClick={() => applySearch()}>
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
