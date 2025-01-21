import React, { useState } from "react";
import "./styles.css";

const SearchArea: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", query);
  };

  return (
    <div className="search-area">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchArea;
