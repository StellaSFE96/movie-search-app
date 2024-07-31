import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #373A40;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 100px;
`;

const Searchbar = styled.input`
  width: 30%;
  height: 60%;
  padding: 15px 20px;
  border-radius: 20px;
`;

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
    onSearch(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  return (
    <Container>
      <Searchbar
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
