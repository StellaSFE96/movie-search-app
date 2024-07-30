import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { Movie } from '../types/movieTypes';
import { fetchMovies } from '../API/api';

const Container = styled.div`
  max-width: 1200vw;
  margin: 0 auto;
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
  color: #444;
`;

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <Container>
      <Title>Movie Catalogue</Title>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </Container>
  );
};

export default HomePage;