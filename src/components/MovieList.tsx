// MovieList.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Movie } from '../types/movieTypes';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [visibleMovies, setVisibleMovies] = useState(10); // 3 rows of 5

  const showMoreMovies = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 10); // Show 3 more rows
  };

  return (
    <>
      <Container>
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
      {visibleMovies < movies.length && (
        <ShowMoreButton onClick={showMoreMovies}>Show More</ShowMoreButton>
      )}
    </>
  );
};

export default MovieList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
