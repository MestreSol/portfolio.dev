import React, { useState } from 'react';
import './styles.css';

function SearchArea() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-area">
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchArea;
