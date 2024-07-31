import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Searchbar = styled.input`
  width: 30%;
  padding: 15px 20px;
`

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      onSearch(debouncedTerm);
    }
  }, [debouncedTerm, onSearch]);

  return (
    <Searchbar
      type="text"
      placeholder="Search for a movie..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
