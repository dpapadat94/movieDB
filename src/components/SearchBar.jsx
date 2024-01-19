import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        className="search-bar"
        value={search}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search for a moive"
      />
      <Link
        className="link-search"
        to={search.length > 0 ? `/searchpage/${search}` : `/`}
      >
        Search
      </Link>
    </div>
  );
}

export default SearchBar;
