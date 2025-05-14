import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
