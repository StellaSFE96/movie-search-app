import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import FeaturedMovies from '../components/FeaturedMovies';
import PopularMovies from '../components/PopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { Movie } from '../types/movieTypes';
import { fetchMovies } from '../API/api';
import Popcorn from '../assets/images/popcorn.avif';

const Container = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: white;
  padding-bottom: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Popcorn});
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: -1;
  }
`;

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Memoize the handleSearch function to prevent it from being recreated on every render
  const handleSearch = useCallback(async (query: string) => {
    if (query.trim()) {
      setHasSearched(true);
      try {
        const response = await fetchMovies(query);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    } else {
      setHasSearched(false);
      setMovies([]); // Clear results if the query is empty
    }
  }, []); // Empty dependency array to memoize the function

  return (
    <Container $backgroundImage={Popcorn}>
      <SearchBar onSearch={handleSearch} />
      {hasSearched && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <>
          <FeaturedMovies />
          <PopularMovies />
          <UpcomingMovies />
        </>
      )}
    </Container>
  );
};

export default HomePage;
